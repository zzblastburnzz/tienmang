import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FriendSuggestionInline() {
  const [npcs, setNpcs] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadNPCs = async () => {
      const json = await AsyncStorage.getItem("npc_list");
      if (json) {
        const all = JSON.parse(json);
        const random = all.sort(() => 0.5 - Math.random()).slice(0, 5);
        setNpcs(random);
      }
    };
    loadNPCs();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("CharacterProfile", { character: item })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Kết bạn</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Nhắn tin</Text></TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.title}>Những người bạn có thể biết</Text>
      <FlatList
        data={npcs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 10 },
  card: {
    width: 140,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  avatar: { width: 60, height: 60, borderRadius: 30, marginBottom: 6 },
  name: { fontWeight: "bold", fontSize: 14, marginBottom: 6 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 6
  },
  button: {
    backgroundColor: "#4e8bed",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 6,
    flex: 1,
    alignItems: "center"
  },
  btnText: { color: "white", fontSize: 12 }
});
