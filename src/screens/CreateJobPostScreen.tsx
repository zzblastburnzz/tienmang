import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import mockPosts from "../data/mockPosts.json";

export default function CreateJobPostScreen({ navigation }: any) {
  const [content, setContent] = useState("");
  const [reward, setReward] = useState("");
  const [currency, setCurrency] = useState<"silver" | "gold" | "spiritStone">("silver");

  const handlePost = () => {
    if (!content.trim() || !reward) {
      return Alert.alert("Lỗi", "Vui lòng nhập nội dung và phần thưởng.");
    }

    const newPost = {
      id: "p" + (mockPosts.length + 1),
      author: "Người chơi A",
      avatar: "https://i.imgur.com/YHpvwGi.png",
      content,
      isJob: true,
      reward: { [currency]: parseInt(reward) }
    };

    mockPosts.unshift(newPost); // Thêm bài viết vào đầu danh sách (demo)
    Alert.alert("🎉 Đã đăng bài", "Bài tuyển người đã được đăng lên bảng tin.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📣 Tạo bài đăng tuyển người giúp việc</Text>
      <TextInput
        placeholder="Bạn cần gì? (VD: Tìm người bê hàng sáng mai...)"
        style={styles.input}
        multiline
        value={content}
        onChangeText={setContent}
      />
      <TextInput
        placeholder="Phần thưởng (ví dụ: 1000)"
        style={styles.input}
        keyboardType="numeric"
        value={reward}
        onChangeText={setReward}
      />
      <Text style={styles.label}>Chọn loại tiền thưởng:</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setCurrency("silver")} style={[styles.option, currency === "silver" && styles.selected]}>
          <Text>🪙 Tiền đồng</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrency("gold")} style={[styles.option, currency === "gold" && styles.selected]}>
          <Text>🥇 Vàng</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrency("spiritStone")} style={[styles.option, currency === "spiritStone" && styles.selected]}>
          <Text>🔮 Linh thạch</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handlePost}>
        <Text style={styles.btnText}>Đăng bài</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  input: {
    borderWidth: 1, borderColor: "#ccc", padding: 12, borderRadius: 10, marginBottom: 10
  },
  label: { marginTop: 10, marginBottom: 4, fontWeight: "bold" },
  row: { flexDirection: "row", marginBottom: 20 },
  option: {
    padding: 10, backgroundColor: "#f3f4f6", marginRight: 10, borderRadius: 8
  },
  selected: {
    backgroundColor: "#a7f3d0"
  },
  btn: {
    backgroundColor: "#22c55e", padding: 14, borderRadius: 10
  },
  btnText: {
    color: "white", fontWeight: "bold", textAlign: "center"
  }
});
