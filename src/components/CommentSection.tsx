import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const loadComments = async () => {
      const stored = await AsyncStorage.getItem(`comments_${postId}`);
      if (stored) setComments(JSON.parse(stored));
    };
    loadComments();
  }, [postId]);

  const addComment = async () => {
    if (!input.trim()) return;
    const newComment = {
      id: Date.now().toString(),
      author: "Bạn",
      content: input.trim()
    };
    const updated = [newComment, ...comments];
    setComments(updated);
    await AsyncStorage.setItem(`comments_${postId}`, JSON.stringify(updated));
    setInput("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.comment}>
      <Text style={styles.author}>{item.author}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>Chưa có bình luận nào.</Text>}
      />
      <View style={styles.inputRow}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Viết bình luận..."
          style={styles.input}
        />
        <TouchableOpacity onPress={addComment} style={styles.sendBtn}>
          <Text style={styles.sendText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 12 },
  comment: {
    marginBottom: 8,
    backgroundColor: "#f2f2f2",
    padding: 8,
    borderRadius: 6
  },
  author: { fontWeight: "bold", marginBottom: 2 },
  empty: { color: "#999", fontStyle: "italic", marginBottom: 10 },
  inputRow: {
    flexDirection: "row",
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 8
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8
  },
  sendBtn: {
    backgroundColor: "#4e8bed",
    borderRadius: 6,
    paddingHorizontal: 12,
    justifyContent: "center"
  },
  sendText: { color: "white", fontWeight: "bold" }
});
