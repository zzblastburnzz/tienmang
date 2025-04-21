import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { OPENAI_API_KEY } from "@env";

export default function ChatRoomScreen({ route }) {
  const { name } = route.params;
  const [messages, setMessages] = useState([
    { id: "1", from: name, text: "Chào đạo hữu, ngươi tìm ta có chuyện gì sao?" }
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      from: "me",
      text: inputText
    };

    const updated = [...messages, userMessage];
    setMessages(updated);
    setInputText("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: `Bạn là ${name}, một nhân vật tu tiên trong thế giới giả tưởng.` },
            ...updated.map((msg) => ({
              role: msg.from === "me" ? "user" : "assistant",
              content: msg.text
            }))
          ]
        })
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content;

      if (reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "_res",
            from: name,
            text: reply
          }
        ]);
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.message, item.from === "me" ? styles.myMessage : styles.theirMessage]}>
            <Text style={styles.sender}>{item.from === "me" ? "Tôi" : item.from}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 16 }}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Nhập lời bạn muốn nói..."
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={{ color: "white" }}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  message: {
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
    maxWidth: "80%"
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6"
  },
  theirMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0"
  },
  sender: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4
  },
  inputRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    padding: 8
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    marginRight: 8
  },
  sendBtn: {
    backgroundColor: "#4e8bed",
    paddingHorizontal: 16,
    borderRadius: 20,
    justifyContent: "center"
  }
});
