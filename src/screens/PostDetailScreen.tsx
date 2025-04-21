import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CommentSection from "../components/CommentSection";

export default function PostDetailScreen({ route }) {
  const { post } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.author}>{post.author}</Text>
      <Text style={styles.content}>{post.content}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}><Text style={styles.actionText}>Quan tâm</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.actionText}>Bình luận</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.actionText}>Nhắn tin</Text></TouchableOpacity>
      </View>

      <CommentSection postId={post.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  author: { fontWeight: "bold", fontSize: 16, marginBottom: 10 },
  content: { fontSize: 16, lineHeight: 22, marginBottom: 16 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#ddd"
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  actionText: {
    fontSize: 14,
    color: "#555"
  }
});
