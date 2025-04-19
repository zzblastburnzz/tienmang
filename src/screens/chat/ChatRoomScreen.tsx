import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function ChatRoomScreen() {
  const route = useRoute();
  const { name } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💬 Đang trò chuyện với {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: "bold" }
});
