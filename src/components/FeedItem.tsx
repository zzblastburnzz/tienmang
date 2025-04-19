import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const reactionEmojis = ["👍", "🤣", "😢", "😮"];

export default function FeedItem({ post }: { post: any }) {
  const [userReaction, setUserReaction] = useState(post.userReaction || null);
  const [reactions, setReactions] = useState(post.reactions || {});
  const [comments, setComments] = useState(post.comments || []);

  const handleReact = (emoji: string) => {
    if (userReaction) return;
    const updated = { ...reactions };
    updated[emoji] = (updated[emoji] || 0) + 1;
    setReactions(updated);
    setUserReaction(emoji);
  };

  const handleQuickComment = () => {
    const text = "✨ Linh khí hôm nay dao động thật lạ...";
    setComments([...comments, text]);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.author}>👤 {post.author}</Text>
      <Text style={styles.content}>{post.content}</Text>

      <View style={styles.reactionRow}>
        {reactionEmojis.map((emoji) => (
          <TouchableOpacity
            key={emoji}
            style={[styles.reactionBtn, userReaction === emoji && styles.reacted]}
            onPress={() => handleReact(emoji)}
          >
            <Text>{emoji} {reactions[emoji] || 0}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.commentBtn} onPress={handleQuickComment}>
        <Text style={styles.commentText}>💬 Bình luận nhanh</Text>
      </TouchableOpacity>

      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.comment}>📝 {item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fefce8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  author: { fontWeight: "bold", marginBottom: 6 },
  content: { marginBottom: 12, lineHeight: 20 },
  reactionRow: { flexDirection: "row", gap: 10, marginBottom: 10 },
  reactionBtn: {
    backgroundColor: "#e5e7eb",
    padding: 6,
    borderRadius: 6
  },
  reacted: {
    backgroundColor: "#fde68a"
  },
  commentBtn: {
    backgroundColor: "#bae6fd",
    padding: 8,
    borderRadius: 8,
    marginBottom: 10
  },
  commentText: { textAlign: "center", fontWeight: "bold" },
  comment: { fontStyle: "italic", marginBottom: 4 }
});
