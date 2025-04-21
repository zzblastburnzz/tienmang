import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MonPhaiScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏯 Môn phái của bạn</Text>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SectManage")}>
        <Text>🧭 Quản lý môn phái</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("InternalTasks")}>
        <Text>🛠️ Giao nhiệm vụ nội bộ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ContributionHistory")}>
        <Text>📜 Lịch sử đóng góp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("AutoRewardSummary")}>
        <Text>🏅 Vinh danh & kỷ luật</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CompanyRanking")}>
        <Text>📊 Xếp hạng môn phái</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#e0f2fe",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12
  }
});
