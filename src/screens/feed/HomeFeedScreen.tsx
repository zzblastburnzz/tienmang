import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert, StyleSheet } from "react-native";
import posts from "../data/mockPosts";
import OpportunityBanner from "../components/OpportunityBanner";
import { checkOpportunity } from "../utils/opportunityTrigger";

export default function HomeFeedScreen({ navigation }: any) {
  const [opportunity, setOpportunity] = useState<string | null>(null);

  useEffect(() => {
    // Giả lập dữ liệu hồ sơ người dùng
    const userProfile = { bio: "Tôi là thợ khắc bùa và vẽ biển hiệu" };
    const interactions = [
      { type: "job", status: "done" },
      { type: "job", status: "done" },
      { type: "job", status: "done" },
      { type: "job", status: "done" },
      { type: "job", status: "done" }
    ];

    const result = checkOpportunity(userProfile, interactions);
    if (result) setOpportunity(result);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📜 Bảng Tin Tu Tiên</Text>

      {opportunity && (
        <OpportunityBanner
          message={opportunity}
          onAccept={() => {
            Alert.alert("🌟 Tu luyện bắt đầu", "Bạn đã chấp nhận con đường tu tiên!");
            setOpportunity(null);
          }}
          onDecline={() => {
            Alert.alert("❌ Bạn từ chối cơ hội lần này.");
            setOpportunity(null);
          }}
        />
      )}

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.name}>{item.author}</Text>
            </View>
            <Text style={styles.content}>{item.content}</Text>
            {item.isJob && (
              <TouchableOpacity onPress={() => navigation.navigate("Chat", { memberId: item.author })}>
                <Text style={styles.hint}>⚠ Có vẻ họ đang cần người giúp đỡ...</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  card: {
    backgroundColor: "#f9fafb",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { fontWeight: "bold", fontSize: 16 },
  content: { fontSize: 15, marginBottom: 6 },
  hint: { color: "#f59e0b", fontStyle: "italic", marginTop: 5 }
});
