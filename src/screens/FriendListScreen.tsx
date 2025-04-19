import React from "react";
import { View, Text, FlatList } from "react-native";
import { mockMembers } from "../data/mockMembers";

export default function FriendListScreen() {
  return (
    <FlatList
      data={mockMembers}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>👤 {item.name}</Text>}
      contentContainerStyle={{ padding: 20 }}
    />
  );
}
