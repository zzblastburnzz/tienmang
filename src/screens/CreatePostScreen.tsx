import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CreatePostScreen() {
  const [content, setContent] = useState("");
  const navigation = useNavigation();

  const handlePost = () => {
    if (!content.trim()) return Alert.alert("Lỗi", "Bạn chưa nhập nội dung bài viết.");
    // 🚧 Sau này sẽ lưu vào backend hoặc state toàn cục
    Alert.alert("✅ Đăng bài thành công", "Bài viết của bạn đã xuất hiện trên bảng tin.");
    setContent("");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📝 Tạo bài viết mới</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Bạn đang nghĩ gì? (
