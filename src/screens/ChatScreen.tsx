import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as Speech from "expo-speech";
import { addMoney } from "../utils/wallet";
import { addTransaction } from "../utils/transaction";

export default function ChatScreen({ route }: any) {
  const { memberId } = route.params;
  const [messages, setMessages] = useState<{ from: "user" | "ai"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [jobState, setJobState] = useState<{
    started: boolean;
    confirmed: boolean;
    total: number;
    paid: number;
  }>({ started: false, confirmed: false, total: 1000, paid: 0 });

  const aiReply = (text: string): string => {
    const lower = text.toLowerCase();
    if (!jobState.started && lower.includes("giúp")) {
      setJobState({ started: true, confirmed: false, total: 1000, paid: 500 });
      addMoney("silver", 500);
      addTransaction("gain", "Tạm ứng từ " + memberId, 500, "silver");
      return "Nếu ngươi rảnh, giúp ta là được. Ta gửi ngươi 500 tiền đồng trước nhé. Xong rồi báo ta xem kết quả.";
    }

    if (jobState.started && !jobState.confirmed && (lower.includes("xong") || lower.includes("gửi hình"))) {
      setJobState({ ...jobState, confirmed: true });
      addMoney("silver", 500);
      addTransaction("gain", "Hoàn tất nhiệm vụ từ " + memberId, 500, "silver");
      return "Tốt lắm! Bảng hiệu nhìn ổn đấy. Ta gửi nốt phần còn lại như đã hứa.";
    }

    return "Ừm, ngươi nói tiếp xem nào?";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    const aiText = aiReply(userText);
    setMessages([...messages, { from: "user", text: userText }, { from: "ai", text: aiText }]);
    Speech.speak(aiText, { language: "vi-VN" });
    setInput("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💬 Trò chuyện với {memberId}</Text>
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.msg, item.from === "user" ? styles.user : styles.ai]}>
            <Text>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 90 }}
      />
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tin nhắn..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSend}>
          <Text style={styles.btnText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  header: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  msg: { padding: 10, marginVertical: 4, borderRadius: 10, maxWidth: "80%" },
  user: { alignSelf: "flex-end", backgroundColor: "#dcfce7" },
  ai: { alignSelf: "flex-start", backgroundColor: "#f3f4f6" },
  inputBox: {
    position: "absolute", bottom: 10, left: 10, right: 10,
    flexDirection: "row", alignItems: "center"
  },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 10 },
  btn: {
    marginLeft: 10, backgroundColor: "#22c55e",
    paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10
  },
  btnText: { color: "white", fontWeight: "bold" }
});
