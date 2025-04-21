import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function FriendSuggestionScreen() {
  const [npcList, setNpcList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchNPCs = async () => {
      const json = await AsyncStorage.getItem("npc_list");
      if (json) setNpcList(JSON.parse(json));
    };
    fetchNPCs();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("CharacterProfile", { character: item })
      }
    >
      <Image
        source={{ uri: item.avatar || "https://via.placeholder.com/60" }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{item.name} ({item.role})</Text>
        <Text style={styles.personality}>{item.personality}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={npcList}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
      ListHeaderComponent={<Text style={styles.title}>🧙 Gợi ý kết bạn</Text>}
    />
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f9ff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12
  },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  name: { fontWeight: "bold", fontSize: 16 },
  personality: { fontStyle: "italic", color: "#555" }
});
