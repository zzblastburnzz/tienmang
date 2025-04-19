import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const offerings = [
  "1 Linh thạch",
  "3 Hương Trầm Thiên Cổ",
  "1 Tụ Tâm Hoa",
  "10 Kinh Văn Cổ"
];

export default function SendOfferingScreen({ route }: any) {
  const { vipName } = route.params;
  const [offering, setOffering] = useState(offerings[0]);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    Alert.alert(
      "🎁 Lễ vật đã gửi",
      `Bạn đã dâng "${offering}" đến ${vipName} cùng lời nguyện:
"${message}"`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🧧 Dâng lễ cho {vipName}</Text>
      <Text style={styles.label}>Chọn lễ vật:</Text>
      {offerings.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.option, offering === item && styles.selected]}
          onPress={() => setOffering(item)}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.label}>Lời cầu nguyện:</Text>
      <TextInput
        placeholder="Xin tông chủ chỉ điểm pháp môn..."
        style={styles.input}
        multiline
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.btn} onPress={handleSend}>
        <Text style={styles.btnText}>Dâng lễ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  label: { fontWeight: "bold", marginTop: 10, marginBottom: 5 },
  option: {
    padding: 10,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    marginBottom: 5
  },
  selected: {
    backgroundColor: "#c7d2fe"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 20
  },
  btn: {
    backgroundColor: "#8b5cf6",
    paddingVertical: 14,
    borderRadius: 10
  },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" }
});
