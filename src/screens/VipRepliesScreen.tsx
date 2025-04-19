import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const vipReplies = [
  {
    from: "Tông chủ Vô Ngân",
    reply: "Lời cầu đạo của ngươi đã được cảm ứng. Về phía Bắc, Trấn Linh Đài sẽ mở lúc trăng tròn..."
  },
  {
    from: "Lão sư Thanh Tịnh",
    reply: "Ngươi có tiềm năng. Nhưng con đường ngươi chọn… không dễ đâu."
  },
  {
    from: "Đạo nhân Hắc Tuyền",
    reply: "Ta không tiếp kẻ chưa qua tẩy tuỷ. Đi đi."
  }
];

export default function VipRepliesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📩 Hồi âm từ nhân vật VIP</Text>
      <FlatList
        data={vipReplies}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.from}>💬 {item.from}</Text>
            <Text style={styles.reply}>{item.reply}</Text>
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
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10
  },
  from: { fontWeight: "bold", fontSize: 16, color: "#4c1d95" },
  reply: { marginTop: 6, fontStyle: "italic", color: "#1f2937" }
});
