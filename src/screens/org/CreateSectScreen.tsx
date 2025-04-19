import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function CreateSectScreen() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [philosophy, setPhilosophy] = useState("");

  const handleCreate = () => {
    if (!name || !symbol || !philosophy) {
      Alert.alert("❗ Thiếu thông tin", "Vui lòng điền đầy đủ các trường.");
      return;
    }

    Alert.alert("🎉 Thành lập thành công", `Môn phái "${name}" đã được khai sinh!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏯 Thành lập Môn Phái</Text>

      <Text style={styles.label}>Tên môn phái:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ví dụ: Tàng Phong Các"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Biểu tượng (emoji hoặc ký hiệu):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ví dụ: 🌪️, 🔥, 🐉"
        value={symbol}
        onChangeText={setSymbol}
      />

      <Text style={styles.label}>Định hướng pháp môn:</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Mô tả triết lý tu luyện của phái bạn..."
        value={philosophy}
        onChangeText={setPhilosophy}
        multiline
      />

      <TouchableOpacity style={styles.btn} onPress={handleCreate}>
        <Text style={styles.btnText}>✨ Thành lập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  label: { fontWeight: "bold", marginTop: 15 },
  input: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginTop: 5
  },
  textarea: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10,
    marginTop: 5, height: 100, textAlignVertical: "top"
  },
  btn: {
    marginTop: 30,
    backgroundColor: "#a78bfa",
    padding: 14,
    borderRadius: 10
  },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" }
});
