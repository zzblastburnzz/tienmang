import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { getWallet } from "../utils/wallet";
import { applyDailyExpenses, applyWeeklyTax } from "../utils/lifeExpenses";

export default function DailyExpenseSimulator() {
  const wallet = getWallet();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💸 Mô phỏng chi tiêu</Text>
      <Text>🪙 Tiền đồng: {wallet.silver}</Text>
      <Text>🥇 Vàng: {wallet.gold}</Text>
      <Text>🔮 Linh thạch: {wallet.spiritStone}</Text>

      <Button title="Trừ tiền thuê nhà (hàng ngày)" onPress={() => alert(applyDailyExpenses())} />
      <Button title="Đóng thuế tu tiên (hàng tuần)" onPress={() => alert(applyWeeklyTax())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 }
});
