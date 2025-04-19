import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const relationships = {
  friends: ["Tiểu Linh", "Lữ Tàng"],
  disciples: ["Bảo Nhi (đệ tử)"],
  partner: "Hàn Nhược Y"
};

const RelationshipCenterScreen = () => {
  const [tab, setTab] = useState<"friends" | "disciples" | "partner">("friends");

  const renderContent = () => {
    if (tab === "friends") {
      return (
        <FlatList
          data={relationships.friends}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={styles.item}>🤝 {item}</Text>}
        />
      );
    }
    if (tab === "disciples") {
      return (
        <FlatList
          data={relationships.disciples}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={styles.item}>📜 {item}</Text>}
        />
      );
    }
    if (tab === "partner") {
      return (
        <View>
          <Text style={styles.item}>💍 Hôn phối: {relationships.partner}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>👶 Xin con</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💞 Trung Tâm Nhân Duyên</Text>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setTab("friends")} style={[styles.tab, tab === "friends" && styles.active]}>
          <Text style={styles.tabText}>Bạn bè</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab("disciples")} style={[styles.tab, tab === "disciples" && styles.active]}>
          <Text style={styles.tabText}>Sư đồ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab("partner")} style={[styles.tab, tab === "partner" && styles.active]}>
          <Text style={styles.tabText}>Hôn phối</Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  tabs: { flexDirection: "row", marginBottom: 20 },
  tab: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 4
  },
  active: { backgroundColor: "#c084fc" },
  tabText: { color: "#1f2937", fontWeight: "bold" },
  item: { fontSize: 16, paddingVertical: 8, paddingLeft: 10 },
  button: {
    backgroundColor: "#4ade80",
    marginTop: 15,
    padding: 12,
    borderRadius: 10
  },
  buttonText: { textAlign: "center", fontWeight: "bold", color: "white" }
});

export default RelationshipCenterScreen;
