import React from "react";
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FeedItem from "../../components/FeedItem";
import { mockPosts } from "../../data/mockPosts";

export default function FeedScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ padding: 16 }}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("KOLFeed")}>
          <Text>KOL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("MemeHall")}>
          <Text>Meme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Suggestion")}>
          <Text>Kết nối</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("StoryFeed")}>
          <Text>Story</Text>
        </TouchableOpacity>
      </View>

      {mockPosts.map((post, index) => (
        <FeedItem key={index} post={post} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  btn: {
    backgroundColor: "#d1fae5",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5
  }
});
