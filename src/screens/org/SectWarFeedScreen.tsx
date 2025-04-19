import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";

const warFeed = [
  {
    title: "🌪️ Tàng Phong Các vs 🧤 Huyết Linh Giáo",
    desc: "Tàng Phong Các thả dây thần thú... quấn vào trận pháp Huyết Linh Giáo. Hai bên cãi nhau 3 ngày chưa phân thắng.",
    date: "2025-04-21"
  },
  {
    title: "🐢 Trúc Lâm Tự bị đá bay bảng tên",
    desc: "Phong Ảnh Môn luyện kiếm sai kỹ thuật... khiến bảng tên Trúc Lâm bay mất. Hai bên đang... uống trà hòa giải.",
    date: "2025-04-23"
  }
];

export default function SectWarFeedScreen() {
  const handleReact = (title: string) => {
    Alert.alert("🤣 Phản ứng ghi nhận", `Bạn vừa thả haha cho: "${title}"`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📣 Bảng Tin Đại Chiến Tu Giới</Text>
      <FlatList
        data={warFeed}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <Text style={styles.date}>🗓️ {item.date}</Text>
            <TouchableOpacity style={styles.reactBtn} onPress={() => handleReact(item.title)}>
              <Text style={styles.reactText}>🤣 Thả haha</Text>
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
  card: {
    backgroundColor: "#fef3c7",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  desc: { marginBottom: 4 },
  date: { fontSize: 12, color: "#6b7280" },
  reactBtn: {
    backgroundColor: "#fcd34d",
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 10
  },
  reactText: {
    textAlign: "center", fontWeight: "bold", color: "#78350f"
  }
});
