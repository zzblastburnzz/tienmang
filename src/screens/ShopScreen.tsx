import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import shopItems from "../data/shopItems.json";
import { getWallet, spendMoney } from "../utils/wallet";

export default function ShopScreen() {
  const wallet = getWallet();

  const handleBuy = (item: any) => {
    const price = item.price;
    try {
      if (price.silver) spendMoney("silver", price.silver);
      if (price.gold) spendMoney("gold", price.gold);
      if (price.spiritStone) spendMoney("spiritStone", price.spiritStone);
      Alert.alert("🎉 Mua thành công!", `Bạn đã mua: ${item.name}`);
    } catch (err) {
      Alert.alert("❌ Không đủ tiền!", `Bạn không có đủ để mua: ${item.name}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛍️ Cửa hàng thế giới tu tiên</Text>
      <FlatList
        data={shopItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>
              Giá:
              {item.price.silver ? ` 🪙 ${item.price.silver} tiền đồng` : ""}
              {item.price.gold ? ` 🥇 ${item.price.gold} vàng` : ""}
              {item.price.spiritStone ? ` 🔮 ${item.price.spiritStone} linh thạch` : ""}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => handleBuy(item)}>
              <Text style={styles.buttonText}>Mua</Text>
            </TouchableOpacity>
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
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15
  },
  name: { fontWeight: "bold", fontSize: 16 },
  desc: { fontStyle: "italic", marginVertical: 6 },
  price: { marginBottom: 10 },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 10,
    borderRadius: 8
  },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" }
});
