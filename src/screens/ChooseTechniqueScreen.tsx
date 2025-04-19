import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from "react-native";

const techniques = [
  {
    id: "CF1",
    name: "Ngự Phong Tâm Pháp",
    description: "Tốc độ luyện công nhanh, tốn nhiều linh thạch. Phù hợp người bận rộn, cần hiệu quả.",
  },
  {
    id: "CF2",
    name: "Địa Mạch Công",
    description: "Chậm mà chắc, tiết kiệm tài nguyên. Phù hợp người kiên trì, ít vội.",
  },
  {
    id: "CF3",
    name: "Linh Tâm Kinh",
    description: "Duyên ngộ cao, sức mạnh tùy vào hành động và nhân duyên. Phù hợp người hay giao tiếp.",
  },
  {
    id: "CF4",
    name: "Ảo Ảnh Tụ Hồn",
    description: "Tàng hình, né tránh, luyện chậm nhưng ít bị rủi ro. Phù hợp người thích đi một mình.",
  }
];

export default function ChooseTechniqueScreen() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleChoose = () => {
    if (!selected) return Alert.alert("Chọn công pháp", "Bạn chưa chọn công pháp nào!");
    Alert.alert("✨ Đã chọn", `Bạn đã chọn công pháp: ${selected}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 Chọn công pháp tu luyện</Text>
      <FlatList
        data={techniques}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, selected === item.id && styles.selectedCard]}
            onPress={() => setSelected(item.id)}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.btn} onPress={handleChoose}>
        <Text style={styles.btnText}>Xác nhận chọn công pháp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  card: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#f3f4f6",
    marginBottom: 10
  },
  selectedCard: {
    backgroundColor: "#dbeafe",
    borderWidth: 1,
    borderColor: "#3b82f6"
  },
  name: { fontWeight: "bold", fontSize: 16, marginBottom: 6 },
  desc: { fontStyle: "italic", color: "#374151" },
  btn: {
    marginTop: 20,
    backgroundColor: "#4f46e5",
    paddingVertical: 14,
    borderRadius: 10
  },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" }
});
