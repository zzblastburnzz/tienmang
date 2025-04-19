import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const cultivationPath = [
  {
    stage: "Phàm nhân",
    description: "Sống đời thường, chưa ngộ đạo",
    date: "2025-04-10"
  },
  {
    stage: "Bắt đầu tu luyện",
    description: "Nhận được lời mời tu luyện từ Tiểu Linh",
    date: "2025-04-15"
  },
  {
    stage: "Luyện khí tầng 1",
    description: "Đột phá nhờ duyên ngộ sau chuỗi nhiệm vụ",
    date: "2025-04-17"
  },
  {
    stage: "Luyện khí tầng 2",
    description: "Cảm ứng được khí mạch sau khi giúp đỡ người dân Trấn Hoa Sơn",
    date: "2025-04-20"
  }
];

export default function CultivationTimelineScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📈 Đạo lộ tu luyện của bạn</Text>
      <FlatList
        data={cultivationPath}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.stage}>🧘 {item.stage}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.date}>{item.date}</Text>
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
    borderRadius: 12,
    marginBottom: 10
  },
  stage: { fontWeight: "bold", fontSize: 16, color: "#4f46e5" },
  desc: { fontStyle: "italic", marginVertical: 6 },
  date: { color: "#6b7280", fontSize: 12 }
});
