import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";

const sect = {
  name: "Tàng Phong Các",
  symbol: "🌪️",
  leader: "Người chơi A",
  elders: ["Lữ Tàng", "Tiểu Linh"],
  disciples: ["Bảo Nhi", "Quân Phong", "Minh Châu"],
  fund: 1200,
  weeklyCost: 900
};

export default function SectManagementScreen() {
  const handleWarn = () => {
    if (sect.fund < sect.weeklyCost) {
      Alert.alert("⚠️ Nguy cơ phá sản", "Quỹ môn phái không đủ để duy trì tuần này!");
    } else {
      Alert.alert("✅ Ổn định", "Quỹ hiện tại vẫn duy trì được môn phái.");
    }
  };

  const handleDistributeReward = () => {
    Alert.alert("🎁 Thưởng công", "Bạn đã phát 100 linh thạch cho toàn bộ đệ tử.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{sect.symbol} {sect.name} – Quản Trị</Text>
      <Text style={styles.label}>Trưởng môn: {sect.leader}</Text>
      <Text style={styles.label}>Trưởng lão: {sect.elders.join(", ")}</Text>
      <Text style={styles.label}>Đệ tử: {sect.disciples.length} người</Text>
      <Text style={styles.label}>Quỹ hiện tại: {sect.fund} linh thạch</Text>
      <Text style={styles.label}>Chi phí duy trì: {sect.weeklyCost}/tuần</Text>

      <TouchableOpacity style={styles.btnYellow} onPress={handleWarn}>
        <Text style={styles.btnText}>📉 Kiểm tra nguy cơ phá sản</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnGreen} onPress={handleDistributeReward}>
        <Text style={styles.btnText}>💰 Phát thưởng cho đệ tử</Text>
      </TouchableOpacity>

      <Text style={styles.sub}>📜 Danh sách đệ tử:</Text>
      <FlatList
        data={sect.disciples}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.disciple}>• {item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  label: { marginBottom: 6 },
  sub: { marginTop: 20, fontWeight: "bold" },
  disciple: { marginTop: 4, fontStyle: "italic", paddingLeft: 8 },
  btnYellow: {
    backgroundColor: "#fde68a",
    padding: 12,
    borderRadius: 10,
    marginTop: 15
  },
  btnGreen: {
    backgroundColor: "#86efac",
    padding: 12,
    borderRadius: 10,
    marginTop: 10
  },
  btnText: { textAlign: "center", fontWeight: "bold", color: "#1e293b" }
});
