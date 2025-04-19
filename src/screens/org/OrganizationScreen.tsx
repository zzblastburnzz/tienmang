import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OrganizationScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.section}>📘 Môn phái</Text>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CreateSect")}>
        <Text>Tạo môn phái</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SectManage")}>
        <Text>Quản lý môn phái</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SectHistory")}>
        <Text>Lịch sử môn phái</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("IntersectDiplomacy")}>
        <Text>Quan hệ liên phái</Text>
      </TouchableOpacity>

      <Text style={styles.section}>🏢 Công ty</Text>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CreateCompany")}>
        <Text>Tạo công ty</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CompanyOrders")}>
        <Text>Đơn hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CompanyReview")}>
        <Text>Đánh giá</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CompanyRanking")}>
        <Text>Xếp hạng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CompanyMembers")}>
        <Text>Nhân sự</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("InternalTasks")}>
        <Text>Nhiệm vụ nội bộ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ContributionHistory")}>
        <Text>Lịch sử đóng góp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("AutoRewardSummary")}>
        <Text>Tổng kết tuần</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0fdf4",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12
  },
  section: { fontWeight: "bold", marginBottom: 10, marginTop: 20, fontSize: 16 }
});
