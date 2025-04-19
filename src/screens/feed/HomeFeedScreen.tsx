import React from "react";
import { ScrollView, View } from "react-native";
import { mockPosts } from "../data/mockPosts";
import OpportunityBanner from "../components/OpportunityBanner";

export default function HomeFeedScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <OpportunityBanner />
      {mockPosts.map((post, index) => (
        <View key={index} style={{ marginBottom: 16 }}>
          <Text>📝 {post.author}: {post.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
