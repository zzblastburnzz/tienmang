import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFeedPosts } from "../../ai/feedStorage";
import FriendSuggestionInline from "../chat/FriendSuggestionInline";

const PAGE_SIZE = 10;

export default function FeedScreen() {
  const [allPosts, setAllPosts] = useState([]);
  const [hydratedLikes, setHydratedLikes] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const visibleRest = allPosts.slice(3, page * PAGE_SIZE + 3);

  useEffect(() => {
    const loadInitial = async () => {
      const raw = await getFeedPosts();
      const npcListJson = await AsyncStorage.getItem("npc_list");
      const npcList = npcListJson ? JSON.parse(npcListJson) : [];

      const postsWithAuthor = raw.map((post) => {
        const authorObj = npcList.find(npc => npc.name === post.author);
        return { ...post, authorObj };
      });

      setAllPosts(postsWithAuthor);

      const updates = {};
      for (let post of postsWithAuthor) {
        const liked = await AsyncStorage.getItem(`liked_${post.id}`);
        updates[post.id] = {
          liked: liked === "true",
          likeCount: post.likeCount || 0
        };
      }
      setHydratedLikes(updates);
      setLoading(false);
    };
    loadInitial();
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    const nextSlice = allPosts.slice(3, nextPage * PAGE_SIZE + 3);
    if (nextSlice.length > visibleRest.length) {
      setPage(nextPage);
    }
  };

  const toggleLike = async (id) => {
    const update = { ...hydratedLikes };
    const curr = update[id] || { liked: false, likeCount: 0 };
    curr.liked = !curr.liked;
    curr.likeCount += curr.liked ? 1 : -1;
    update[id] = curr;
    setHydratedLikes(update);
    await AsyncStorage.setItem(`liked_${id}`, curr.liked ? "true" : "false");
  };

  const renderPost = (post) => {
    const info = hydratedLikes[post.id] || { liked: false, likeCount: post.likeCount || 0 };
    return (
      <View key={post.id} style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            if (post.authorObj) {
              navigation.navigate("CharacterProfile", { character: post.authorObj });
            }
          }}
        >
          <Text style={styles.author}>{post.author}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("PostDetail", { post })}>
          <Text style={styles.content}>{post.content}</Text>
        </TouchableOpacity>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={() => toggleLike(post.id)}>
            <Text style={styles.actionText}>Quan tâm ({info.likeCount})</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PostDetail", { post })}>
            <Text style={styles.actionText}>Bình luận</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.actionText}>Nhắn tin</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#666" />
        <Text style={{ marginTop: 10, color: "#666" }}>Đang tải bảng tin...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={visibleRest}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderPost(item)}
      ListHeaderComponent={() => (
        <View>
          <Text style={styles.heading}>Bảng tin</Text>
          {allPosts.slice(0, 3).map(renderPost)}
          <FriendSuggestionInline />
        </View>
      )}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 1
  },
  author: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
    color: "#2979ff"
  },
  content: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 8
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 6
  },
  actionText: {
    fontSize: 13,
    color: "#555"
  },
  loading: {
    flex: 1,
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  }
});
