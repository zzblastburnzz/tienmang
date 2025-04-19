import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";

const orders = [
  {
    id: "ORD001",
    job: "Giao 1 hòm linh thạch đến Trấn Linh Sơn",
    reward: 250,
    status: "Chưa nhận"
  },
  {
    id: "ORD002",
    job: "Thu mua 5 nhánh Trúc Dược từ vùng Thảo Dã",
    reward: 180,
    status: "Chưa nhận"
  },
  {
    id: "ORD003",
    job: "Khắc hộ trận cho bà cụ ở Linh Đàm",
    reward: 400,
    status: "Chưa nhận"
  }
];

export default function CompanyOrdersScreen() {
  const [currentOrders, setCurrentOrders] = useState(orders);

  const handleAccept = (id: string) => {
    const updated = currentOrders.map(o =>
      o.id === id ? { ...o, status: "Đang xử lý" } : o
    );
    setCurrentOrders(updated);
    Alert.alert("📦 Đã nhận việc", `Bạn đã nhận: ${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📋 Đơn hàng công ty</Text>
      <FlatList
        data={currentOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.job}>📌 {item.job}</Text>
            <Text>💰 Thưởng: {item.reward} linh thạch</Text>
            <Text>📈 Trạng thái: {item.status}</Text>
            {item.status === "Chưa nhận" && (
              <TouchableOpacity style={styles.btn} onPress={() => handleAccept(item.id)}>
                <Text style={styles.btnText}>✅ Nhận job</Text>
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
  job: { fontWeight: "bold", fontSize: 16, marginBottom: 6 },
  btn: {
    marginTop: 10,
    backgroundColor: "#4ade80",
    padding: 10,
    borderRadius: 8
  },
  btnText: { textAlign: "center", fontWeight: "bold", color: "#1e293b" }
});
