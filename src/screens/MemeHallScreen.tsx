import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";

const memes = [
  {
    id: "1",
    caption: "Khi trưởng lão luyện công xong quên tắt trận pháp 🧠💥",
    image: "https://i.imgur.com/U9fW7aN.jpeg"
  },
  {
    id: "2",
    caption: "Đệ tử mới lên núi nhìn thấy tông chủ: 'Ủa ai đây?' 👶🏯",
    image: "https://i.imgur.com/tXWZ7bC.jpeg"
  }
];

export default function MemeHallScreen() {
  const handleReact = (id: string) => {
    Alert.alert("🤣 Ghi nhận", `Bạn đã thả haha cho meme #${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📸 Meme Môn Phái – Cười ngất tu giới</Text>
      <FlatList
        data={memes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.caption}>💬 {item.caption}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => handleReact(item.id)}>
              <Text style={styles.btnText}>🤣 Thả haha</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  card: {
    backgroundColor: "#fefce8",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  },
  image: { width: "100%", height: 180, borderRadius: 10, marginBottom: 10 },
  caption: { marginBottom: 10, fontStyle: "italic" },
  btn: {
    backgroundColor: "#fde047",
    paddingVertical: 10,
    borderRadius: 8
  },
  btnText: { textAlign: "center", fontWeight: "bold", color: "#78350f" }
});
