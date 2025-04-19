import React from "react";
import { View, Text } from "react-native";
import { mockCultivation } from "../data/mockCultivation";

export default function CultivationProfileScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>🧘 Cảnh giới: {mockCultivation.level}</Text>
    </View>
  );
}
