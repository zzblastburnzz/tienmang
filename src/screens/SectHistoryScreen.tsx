import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const history = [
  { type: "thành lập", desc: "Môn phái được sáng lập bởi Người chơi A", date: "2025-04-21" },
  { type: "truyền thừa", desc: "Trưởng môn truyền lại chức vụ cho Lữ Tàng", date: "2025-06-10" },
  { type: "phản bội", desc: "Đệ tử Minh Châu rời môn phái, thành lập phái riêng", date: "2025-07-02" },
  { type: "phước lành", desc: "Nhận được pháp khí từ Tông chủ Vô Ngân", date: "2025-08-01" }
];

const icons = {
  "thành lập": "🏯",
  "truyền thừa": "📜",
  "phản bội": "⚠️",
  "phước lành": "✨"
};

export default function SectHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📖 Lịch sử môn phái</Text>
      <FlatList
        data={history}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.event}>{icons[item.type]} {item.desc}</Text>
            <Text style={styles.date}>📅 {item.date}</Text>
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
    backgroundColor: "#f9fafb",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  event: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  date: { fontSize: 12, color: "#6b7280" }
});
