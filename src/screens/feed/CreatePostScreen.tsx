import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function CreatePostScreen() {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content.trim().length === 0) return Alert.alert("Lỗi", "Không thể đăng bài rỗng");
    Alert.alert("Đăng thành công", "Nội dung: " + content);
    setContent("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>📝 Viết bài mới</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        multiline
        placeholder="Hôm nay trời có linh khí kỳ lạ..."
      />
      <Button title="Đăng bài" onPress={handlePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  input: {
    backgroundColor: "#f9fafb",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    minHeight: 100,
    textAlignVertical: "top"
  }
});
