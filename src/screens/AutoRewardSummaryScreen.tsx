import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const weeklySummary = [
  {
    member: "Tiểu Linh",
    score: 35,
    badge: "🏅 Liên hoàn công trạng",
    notes: "3 nhiệm vụ liên tiếp hoàn thành đúng hạn"
  },
  {
    member: "Bảo Nhi",
    score: -5,
    badge: "⚠️ Chậm deadline",
    notes: "Hoàn thành nhiệm vụ nhưng trễ thời gian"
  },
  {
    member: "Quân Phong",
    score: -20,
    badge: "❌ Không hoạt động",
    notes: "Không nhận nhiệm vụ nào trong tuần"
  }
];

export default function AutoRewardSummaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📊 Tổng kết tự động hàng tuần</Text>
      <FlatList
        data={weeklySummary}
        keyExtractor={(item) => item.member}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>👤 {item.member}</Text>
            <Text>📈 Điểm tuần: {item.score}</Text>
            <Text>🏅 Huy hiệu: {item.badge}</Text>
            <Text style={styles.note}>📝 {item.notes}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  card: {
    backgroundColor: "#eef2ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12
  },
  name: { fontWeight: "bold", fontSize: 16, marginBottom: 6 },
  note: { fontStyle: "italic", marginTop: 6, color: "#4b5563" }
});
