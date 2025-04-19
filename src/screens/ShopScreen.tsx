import React from "react";
import { View, Text, FlatList } from "react-native";
import { mockShopItems } from "../data/mockShopItems";

export default function ShopScreen() {
  return (
    <FlatList
      data={mockShopItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>🛒 {item.name} - {item.price} vàng</Text>}
      contentContainerStyle={{ padding: 20 }}
    />
  );
}
