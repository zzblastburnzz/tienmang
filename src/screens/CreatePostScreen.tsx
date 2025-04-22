
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function CreatePostScreen() {
  const [content, setContent] = useState("");

  const handlePost = () => {
    console.log("Posted:", content);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        placeholder="Bạn đang nghĩ gì? 😊"
        multiline
        numberOfLines={4}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Đăng bài" onPress={handlePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 120,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    textAlignVertical: "top",
  },
});
