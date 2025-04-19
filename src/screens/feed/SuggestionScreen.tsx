import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";

const friendSuggestions = [
  { name: "Hòa Thượng Vô Thích", mutual: 3 },
  { name: "Mộng Nhi", mutual: 2 },
  { name: "Tiểu Thư Lam Yên", mutual: 1 }
];

const kolSuggestions = [
  { name: "Đan Bà Cổ", trending: "🔥 Được nhắc nhiều gần đây" },
  { name: "Lục Nhi", trending: "✨ Bảng tin yêu thích tuần này" },
  { name: "Cốc Rỗng", trending: "🤣 Tấu hài siêu cấp" }
];

export default function SuggestionScreen() {
  const handleAddFriend = (name: string) => {
    Alert.alert("👥 Kết bạn", `Đã gửi lời mời kết bạn đến ${name}`);
  };

  const handleFollowKOL = (name: string) => {
    Alert.alert("👣 Theo dõi", `Bạn đã theo dõi ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔍 Gợi ý kết nối</Text>

      <Text style={styles.section}>👥 Gợi ý kết bạn:</Text>
      <FlatList
        data={friendSuggestions}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>👤 {item.name}</Text>
            <Text>Sở thích chung: {item.mutual}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => handleAddFriend(item.name)}>
              <Text style={styles.btnText}>🤝 Kết bạn</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text style={styles.section}>🌟 KOL đáng theo dõi:</Text>
      <FlatList
        data={kolSuggestions}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>🏯 {item.name}</Text>
            <Text>{item.trending}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => handleFollowKOL(item.name)}>
              <Text style={styles.btnText}>👣 Theo dõi</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  section: { fontWeight: "bold", marginTop: 20, marginBottom: 6, fontSize: 16 },
  card: {
    backgroundColor: "#f9fafb",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10
  },
  name: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  btn: {
    backgroundColor: "#dbeafe",
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8
  },
  btnText: { textAlign: "center", fontWeight: "bold", color: "#1e3a8a" }
});
