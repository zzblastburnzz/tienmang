import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";

const initialTasks = [
  {
    id: "T001",
    title: "Giao 3 linh thạch đến Trấn Linh Sơn",
    assignee: "Bảo Nhi",
    deadline: "2025-05-02",
    status: "Chưa bắt đầu",
    reward: 150
  },
  {
    id: "T002",
    title: "Viết bài meme quảng bá công ty",
    assignee: "Tiểu Linh",
    deadline: "2025-04-27",
    status: "Đang làm",
    reward: 80
  }
];

export default function InternalTaskScreen() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleProgress = (id: string) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, status: "Đã hoàn thành" } : t
    );
    setTasks(updated);
    Alert.alert("✅ Thành công", `Bạn đã hoàn thành nhiệm vụ ${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📋 Nhiệm vụ nội bộ công ty</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>🗂️ {item.title}</Text>
            <Text>👤 Giao cho: {item.assignee}</Text>
            <Text>📅 Deadline: {item.deadline}</Text>
            <Text>🎯 Trạng thái: {item.status}</Text>
            <Text>💰 Thưởng: {item.reward} linh thạch</Text>

            {item.status !== "Đã hoàn thành" && (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => handleProgress(item.id)}
              >
                <Text style={styles.btnText}>📦 Báo cáo hoàn thành</Text>
              </TouchableOpacity>
            )}
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
    backgroundColor: "#f0fdf4",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12
  },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 6 },
  btn: {
    backgroundColor: "#bbf7d0",
    padding: 10,
    borderRadius: 8,
    marginTop: 10
  },
  btnText: { textAlign: "center", fontWeight: "bold", color: "#1e293b" }
});
