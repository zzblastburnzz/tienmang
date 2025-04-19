import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getHistory } from "../utils/transaction";

export default function TransactionHistoryScreen() {
  const history = getHistory();

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return `${d.getHours()}:${d.getMinutes()} - ${d.getDate()}/${d.getMonth() + 1}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📜 Lịch sử giao dịch</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.row, item.type === "gain" ? styles.gain : styles.spend]}>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.amount}>
              {item.type === "gain" ? "+" : "-"}
              {item.amount} {item.currency === "silver" ? "🪙" : item.currency === "gold" ? "🥇" : "🔮"}
            </Text>
            <Text style={styles.time}>{formatDate(item.timestamp)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  row: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 10
  },
  gain: { backgroundColor: "#dcfce7" },
  spend: { backgroundColor: "#fee2e2" },
  desc: { fontWeight: "bold", fontSize: 15 },
  amount: { fontSize: 16 },
  time: { fontSize: 12, color: "#6b7280", marginTop: 4 }
});
