import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const child = {
  name: "Tiểu Mộng",
  gender: "nữ",
  birthDate: "2025-04-21",
  mood: "curious",
  potential: "Thể chất cao, linh căn hỗn hợp",
  growthStage: "sơ sinh",
  interactions: [
    "Được ru ngủ bởi mẹ",
    "Cha kể chuyện về Trấn Hoa Sơn"
  ]
};

export default function ChildProfileScreen() {
  const [logs, setLogs] = useState(child.interactions);

  const addLog = (action: string) => {
    setLogs([...logs, action]);
    Alert.alert("💖 Tương tác thành công", action);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>👶 Hồ sơ đứa trẻ</Text>
      <Text style={styles.label}>Tên: {child.name}</Text>
      <Text>Giới tính: {child.gender}</Text>
      <Text>Ngày sinh: {child.birthDate}</Text>
      <Text>Tâm trạng: {child.mood}</Text>
      <Text>Tiềm năng: {child.potential}</Text>
      <Text>Giai đoạn: {child.growthStage}</Text>

      <Text style={styles.subheader}>✨ Tương tác:</Text>
      <TouchableOpacity style={styles.btn} onPress={() => addLog("Bạn kể một câu chuyện cổ tích")}>
        <Text style={styles.btnText}>📖 Kể chuyện</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => addLog("Bạn ru bé ngủ bằng tiếng sáo trúc")}>
        <Text style={styles.btnText}>🎶 Ru ngủ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => addLog("Bạn tặng bé 1 viên linh thạch mini")}>
        <Text style={styles.btnText}>🎁 Tặng quà</Text>
      </TouchableOpacity>

      <Text style={styles.subheader}>📜 Nhật ký tương tác:</Text>
      {logs.map((log, i) => (
        <Text key={i} style={styles.log}>• {log}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  label: { fontWeight: "bold", marginBottom: 6 },
  subheader: { marginTop: 20, fontWeight: "bold", fontSize: 16 },
  btn: {
    backgroundColor: "#fcd34d",
    padding: 12,
    borderRadius: 10,
    marginTop: 10
  },
  btnText: { textAlign: "center", fontWeight: "bold" },
  log: { marginTop: 6, fontStyle: "italic", color: "#374151" }
});
