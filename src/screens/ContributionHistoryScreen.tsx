import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const contributions = [
  {
    member: "Tiểu Linh",
    task: "Giao linh thạch đến Trấn Linh Sơn",
    status: "Hoàn thành",
    reward: 150,
    date: "2025-04-26"
  },
  {
    member: "Bảo Nhi",
    task: "Viết bài meme quảng bá công ty",
    status: "Hoàn thành",
    reward: 80,
    date: "2025-04-25"
  },
  {
    member: "Quân Phong",
    task: "Bỏ nhiệm vụ giữa chừng",
    status: "Thất bại",
    reward: 0,
    date: "2025-04-24"
  }
];

export default function ContributionHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📜 Lịch sử công trạng thành viên</Text>
      <FlatList
        data={contributions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.member}>👤 {item.member}</Text>
            <Text>📌 Việc: {item.task}</Text>
            <Text>🎯 Kết quả: {item.status}</Text>
            <Text>💰 Thưởng: {item.reward} LT</Text>
            <Text>📅 Ngày: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  card: {
    backgroundColor: "#f1f5f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  member: { fontWeight: "bold", fontSize: 16, marginBottom: 6 }
});
