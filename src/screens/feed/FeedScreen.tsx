import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getFeedPosts } from "../../ai/feedStorage";
import PostItem from "../../components/PostItem";
import FriendSuggestionInline from "../FriendSuggestionInline";

export default function FeedScreen() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const stored = await getFeedPosts();
      setPosts(stored || []);
    };
    load();
  }, []);

  const handlePressPost = (post) => {
    navigation.navigate("PostDetail", { post });
  };

  const handlePressAuthor = (author) => {
    navigation.navigate("CharacterProfile", { character: author });
  };

  const renderItem = ({ item }) => (
    <PostItem
      post={item}
      onPress={() => handlePressPost(item)}
      onPressAuthor={() => handlePressAuthor(item.author)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<FriendSuggestionInline />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
});
