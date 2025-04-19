import React from "react";
import { View, Text } from "react-native";
import { mockPosts } from "../data/mockPosts";

export default function CreateJobPostScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>🛠️ Tạo job từ: {mockPosts[0]?.author}</Text>
    </View>
  );
}
