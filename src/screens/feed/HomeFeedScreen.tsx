import React from "react";
import { ScrollView, Text } from "react-native";
import { mockPosts } from "../data/mockPosts";

export default function HomeFeedScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {mockPosts.map((post, index) => (
        <Text key={index}>📝 {post.author}: {post.content}</Text>
      ))}
    </ScrollView>
  );
}
