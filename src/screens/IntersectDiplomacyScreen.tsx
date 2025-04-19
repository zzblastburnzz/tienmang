import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";

const sects = [
  { name: "Huyết Linh Giáo", relation: "thù địch" },
  { name: "Trúc Lâm Tự", relation: "trung lập" },
  { name: "Phong Ảnh Môn", relation: "đồng minh" }
];

export default function IntersectDiplomacyScreen() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleAction = (type: string) => {
    if (!selected) return;
    Alert.alert("📜 Ngoại giao", `${type} môn phái ${selected} thành công.`);
    setSelected(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌐 Quan hệ Liên Phái</Text>
      <FlatList
        data={sects}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              selected === item.name && styles.selectedCard
            ]}
            onPress={() => setSelected(item.name)}
          >
            <Text style={styles.name}>🏯 {item.name}</Text>
            <Text style={styles.status}>🤝 Tình trạng: {item.relation}</Text>
          </TouchableOpacity>
        )}
      />

      {selected && (
        <View style={styles.actions}>
          <Text style={styles.sub}>📌 Hành động với {selected}:</Text>
          <TouchableOpacity style={styles.btn} onPress={() => handleAction("Gửi thư cầu minh")}>
            <Text style={styles.btnText}>🤝 Kết minh</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handleAction("Gửi tối hậu thư")}>
            <Text style={styles.btnText}>⚠️ Tuyên chiến</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handleAction("Gửi quà ngoại giao")}>
            <Text style={styles.btnText}>🎁 Giao hảo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  card: {
    backgroundColor: "#f9fafb",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  selectedCard: { backgroundColor: "#e0f2fe" },
  name: { fontWeight: "bold", fontSize: 16 },
  status: { marginTop: 4, fontStyle: "italic" },
  actions: { marginTop: 20 },
  sub: { fontWeight: "bold", marginBottom: 10 },
  btn: {
    backgroundColor: "#e2e8f0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10
  },
  btnText: { textAlign: "center", fontWeight: "bold" }
});
