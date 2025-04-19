import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const challenge = {
  title: "Vẽ biểu tượng cho đạo quán",
  detail: "Vị tông chủ cần một bức họa mang đạo vận. Hãy vẽ và gửi hình trong chat."
};

export default function VipChallengeScreen() {
  const [accepted, setAccepted] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📘 Thử thách từ VIP</Text>
      <Text style={styles.title}>{challenge.title}</Text>
      <Text style={styles.detail}>{challenge.detail}</Text>

      {!accepted && (
        <TouchableOpacity style={styles.acceptBtn} onPress={() => setAccepted(true)}>
          <Text style={styles.btnText}>✅ Nhận thử thách</Text>
        </TouchableOpacity>
      )}

      {accepted && !completed && (
        <TouchableOpacity style={styles.completeBtn} onPress={() => {
          Alert.alert("✨ Thành công", "Bạn đã hoàn thành thử thách!");
          setCompleted(true);
        }}>
          <Text style={styles.btnText}>🎯 Đánh dấu đã hoàn thành</Text>
        </TouchableOpacity>
      )}

      {completed && <Text style={styles.done}>✅ Thử thách đã hoàn thành!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  detail: { fontStyle: "italic", marginBottom: 20 },
  acceptBtn: {
    backgroundColor: "#4ade80",
    padding: 14,
    borderRadius: 10
  },
  completeBtn: {
    backgroundColor: "#facc15",
    padding: 14,
    borderRadius: 10
  },
  btnText: { color: "#1f2937", fontWeight: "bold", textAlign: "center" },
  done: { color: "#22c55e", fontWeight: "bold", marginTop: 20 }
});
