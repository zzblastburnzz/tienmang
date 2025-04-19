import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";

const members = [
  { name: "Tiểu Linh", role: "Trưởng nhóm", badge: "🎖️ Giao hàng thần tốc" },
  { name: "Quân Phong", role: "Nhân viên", badge: "⚠️ Giao sai 1 lần" },
  { name: "Bảo Nhi", role: "Thử việc", badge: "🕒 Mới gia nhập" }
];

export default function CompanyMembersScreen() {
  const handlePromote = (name: string) => {
    Alert.alert("⬆️ Thăng chức", `Bạn đã thăng chức cho ${name}`);
  };

  const handleReward = (name: string) => {
    Alert.alert("🎖️ Vinh danh", `Bạn đã gắn huy hiệu mới cho ${name}`);
  };

  const handleDiscipline = (name: string) => {
    Alert.alert("⚠️ Kỷ luật", `${name} đã bị ghi nhận vi phạm.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>👥 Nhân sự công ty</Text>
      <FlatList
        data={members}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>👤 {item.name}</Text>
            <Text>📌 Vai trò: {item.role}</Text>
            <Text>🏅 Huy hiệu: {item.badge}</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.btn} onPress={() => handlePromote(item.name)}>
                <Text style={styles.btnText}>⬆️ Thăng chức</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => handleReward(item.name)}>
                <Text style={styles.btnText}>🎖️ Gắn huy hiệu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnRed} onPress={() => handleDiscipline(item.name)}>
                <Text style={styles.btnText}>⚠️ Kỷ luật</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: "#f0f9ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12
  },
  name: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  actions: { flexDirection: "row", marginTop: 10, gap: 8, flexWrap: "wrap" },
  btn: {
    backgroundColor: "#bae6fd",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  btnRed: {
    backgroundColor: "#fecaca",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  btnText: { fontWeight: "bold", color: "#1e293b" }
});
