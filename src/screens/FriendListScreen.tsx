import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import members from "../data/members.json";

export default function FriendListScreen({ navigation }: any) {
  const [friends, setFriends] = useState<string[]>(["m1"]); // người đã kết bạn
  const [suggestions, setSuggestions] = useState(
    members.filter((m) => !friends.includes(m.id))
  );

  const handleAddFriend = (id: string) => {
    setFriends([...friends, id]);
    setSuggestions(suggestions.filter((m) => m.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>👥 Bạn bè của bạn</Text>
      <FlatList
        data={members.filter((m) => friends.includes(m.id))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Chat", { memberId: item.id })}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.bio}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.subHeader}>🔍 Gợi ý kết bạn</Text>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.bio}</Text>
            </View>
            <TouchableOpacity onPress={() => handleAddFriend(item.id)} style={styles.addBtn}>
              <Text style={styles.addText}>+ Kết bạn</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  subHeader: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontWeight: "bold", fontSize: 16 },
  addBtn: {
    backgroundColor: "#3b82f6",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8
  },
  addText: { color: "white", fontWeight: "bold" }
});
