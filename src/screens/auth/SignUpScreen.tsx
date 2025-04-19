import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";

const avatarList = [
  { id: 1, uri: "https://i.imgur.com/nPCX6eU.png" },
  { id: 2, uri: "https://i.imgur.com/BrFY4XA.png" },
  { id: 3, uri: "https://i.imgur.com/YHpvwGi.png" },
  { id: 4, uri: "https://i.imgur.com/svA9pFi.png" }
];

export default function SignUpScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!name || !selectedAvatar) return alert("Bạn cần nhập tên và chọn avatar.");
    navigation.navigate("HomeFeed", { name, gender, bio, avatar: selectedAvatar });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tạo tài khoản mới</Text>

      <TextInput style={styles.input} placeholder="Tên hiển thị" value={name} onChangeText={setName} />

      <TextInput style={styles.input} placeholder="Giới tính (tuỳ chọn)" value={gender} onChangeText={setGender} />

      <TextInput
        style={[styles.input, { height: 80 }]}
        multiline
        placeholder="Giới thiệu bản thân (ví dụ: Tôi là người phàm thích hóng chuyện tu tiên 😄)"
        value={bio}
        onChangeText={setBio}
      />

      <Text style={styles.subHeader}>Chọn ảnh đại diện:</Text>
      <FlatList
        horizontal
        data={avatarList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedAvatar(item.uri)}>
            <Image
              source={{ uri: item.uri }}
              style={[
                styles.avatar,
                { borderColor: selectedAvatar === item.uri ? "#22c55e" : "transparent" }
              ]}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Bắt đầu tham gia thế giới</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  subHeader: { fontSize: 16, marginVertical: 10 },
  input: {
    borderWidth: 1, borderColor: "#ccc", padding: 12, borderRadius: 8, marginBottom: 10
  },
  avatar: {
    width: 80, height: 80, borderRadius: 40, marginHorizontal: 5, borderWidth: 3
  },
  button: {
    backgroundColor: "#22c55e", padding: 15, borderRadius: 10, marginTop: 20
  },
  buttonText: { color: "white", fontWeight: "bold", textAlign: "center" }
});
