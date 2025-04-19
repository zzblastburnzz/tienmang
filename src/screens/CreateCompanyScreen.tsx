import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const industryOptions = [
  "Vận chuyển linh thạch",
  "Bảo vệ pháp sư",
  "Thu mua dược liệu",
  "Dẫn đường bí cảnh",
  "Chế tạo pháp khí"
];

export default function CreateCompanyScreen() {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState(industryOptions[0]);
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (!name || !industry || !description) {
      Alert.alert("⚠️ Thiếu thông tin", "Vui lòng điền đầy đủ trước khi đăng ký.");
      return;
    }
    Alert.alert("🏢 Đã đăng ký", `Công ty "${name}" ngành "${industry}" đã thành lập!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏢 Thành lập Công Ty Tu Tiên</Text>
      <Text style={styles.label}>Tên công ty:</Text>
      <TextInput
        style={styles.input}
        placeholder="VD: Vận chuyển Chân Đất"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Ngành nghề:</Text>
      {industryOptions.map((option, idx) => (
        <TouchableOpacity
          key={idx}
          style={[styles.option, industry === option && styles.selected]}
          onPress={() => setIndustry(option)}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.label}>Mô tả công ty:</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Sứ mệnh, dịch vụ, hoặc câu chuyện thú vị..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.btn} onPress={handleCreate}>
        <Text style={styles.btnText}>✨ Đăng ký công ty</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  label: { marginTop: 15, fontWeight: "bold" },
  input: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginTop: 5
  },
  textarea: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 8,
    padding: 10, height: 100, marginTop: 5, textAlignVertical: "top"
  },
  option: {
    backgroundColor: "#f3f4f6",
    padding: 10,
    borderRadius: 8,
    marginTop: 5
  },
  selected: {
    backgroundColor: "#d1fae5"
  },
  btn: {
    backgroundColor: "#4ade80",
    padding: 14,
    borderRadius: 10,
    marginTop: 25
  },
  btnText: { textAlign: "center", color: "#1f2937", fontWeight: "bold" }
});
