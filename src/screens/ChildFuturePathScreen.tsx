import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const child = {
  name: "Tiểu Mộng",
  ageStage: "cảm ứng linh khí",
  potential: "thiên linh căn",
  inherited: "Cha: kiên trì | Mẹ: cảm xúc sâu sắc"
};

const pathOptions = [
  { name: "Ngự Phong Phái", desc: "Luyện tốc độ, bay lượn, phù hợp người thiên linh căn" },
  { name: "Tán Tu Phái", desc: "Tự do, không giới hạn, hợp người linh căn hỗn hợp" },
  { name: "Nhân Hòa Phái", desc: "Trị liệu, chữa lành, đồng hành cùng mọi người" },
  { name: "Tự tìm đường riêng", desc: "Không theo phái nào – tự lập môn!" }
];

export default function ChildFuturePathScreen() {
  const [chosen, setChosen] = useState<string | null>(null);

  const handleChoose = () => {
    if (!chosen) return Alert.alert("Chưa chọn", "Bạn cần chọn hướng phát triển cho con.");
    Alert.alert("🎯 Đã xác định đạo lộ", `Tiểu Mộng sẽ theo: ${chosen}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌱 Định hướng tương lai cho {child.name}</Text>
      <Text>Tuổi: {child.ageStage}</Text>
      <Text>Tiềm năng: {child.potential}</Text>
      <Text>Ảnh hưởng từ cha mẹ: {child.inherited}</Text>

      <Text style={styles.sub}>🔮 Chọn môn phái/hành trình:</Text>
      {pathOptions.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={[styles.option, chosen === item.name && styles.selected]}
          onPress={() => setChosen(item.name)}
        >
          <Text style={styles.optionTitle}>{item.name}</Text>
          <Text style={styles.optionDesc}>{item.desc}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.confirm} onPress={handleChoose}>
        <Text style={styles.confirmText}>✅ Xác nhận đạo lộ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  sub: { marginTop: 20, fontWeight: "bold" },
  option: {
    backgroundColor: "#f3f4f6",
    padding: 12,
    borderRadius: 10,
    marginTop: 10
  },
  selected: { backgroundColor: "#d1fae5" },
  optionTitle: { fontWeight: "bold", fontSize: 16 },
  optionDesc: { fontStyle: "italic", color: "#374151" },
  confirm: {
    marginTop: 30,
    backgroundColor: "#4ade80",
    padding: 14,
    borderRadius: 10
  },
  confirmText: { textAlign: "center", fontWeight: "bold", color: "#1f2937" }
});
