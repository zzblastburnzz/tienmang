import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const mockChats = [
  { name: "Mộng Linh Tử" },
  { name: "Cốc Rỗng" },
  { name: "Lục Nhi" }
];

export default function ChatScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={mockChats}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("ChatRoom", { name: item.name })}
          >
            <Text>💬 {item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: "#f0f9ff",
    borderRadius: 8,
    marginBottom: 10
  }
});
