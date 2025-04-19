import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import profile from "../data/userCultivation.json";

export default function CultivationProfileScreen() {
  const canUpgrade = profile.exp >= 5 && profile.spiritStonesUsed >= 5 && profile.tuViLevel === 1;

  const handleUpgrade = () => {
    if (!canUpgrade) {
      Alert.alert("Không đủ điều kiện", "Cần 5 nhiệm vụ hoàn thành và 5 linh thạch đã tiêu.");
      return;
    }
    Alert.alert("🎉 Tu vi tăng!", "Bạn đã đạt Trúc cơ sơ kỳ!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🧘 Hồ sơ tu luyện</Text>
      <Text style={styles.label}>Tên: {profile.username}</Text>
      <Text style={styles.label}>Cảnh giới hiện tại: {profile.tuViName}</Text>
      <Text>Số nhiệm vụ đã hoàn thành: {profile.exp}</Text>
      <Text>Tổng linh thạch đã tiêu: {profile.spiritStonesUsed}</Text>

      {canUpgrade && (
        <TouchableOpacity style={styles.upgradeBtn} onPress={handleUpgrade}>
          <Text style={styles.btnText}>⚡️ Tiến cấp</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.subheader}>📜 Hành trình:</Text>
      <FlatList
        data={profile.history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.log}>
            <Text style={styles.stage}>• {item.stage}</Text>
            <Text style={styles.note}>{item.note}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subheader: { marginTop: 20, fontWeight: "bold", fontSize: 16 },
  label: { fontSize: 16, marginBottom: 4 },
  upgradeBtn: {
    marginTop: 10,
    backgroundColor: "#4ade80",
    padding: 12,
    borderRadius: 10
  },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" },
  log: {
    backgroundColor: "#f3f4f6",
    padding: 10,
    marginTop: 10,
    borderRadius: 8
  },
  stage: { fontWeight: "bold", color: "#7c3aed" },
  note: { fontStyle: "italic" },
  date: { fontSize: 12, color: "#6b7280" }
});
