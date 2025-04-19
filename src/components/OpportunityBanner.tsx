import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function OpportunityBanner({ message, onAccept, onDecline }: any) {
  return (
    <View style={styles.banner}>
      <Text style={styles.text}>✨ {message}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
          <Text style={styles.btnText}>Theo học</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.declineBtn} onPress={onDecline}>
          <Text style={styles.btnText}>Từ chối</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#ede9fe",
    borderColor: "#8b5cf6",
    borderWidth: 2,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20
  },
  text: {
    color: "#6b21a8",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  acceptBtn: {
    backgroundColor: "#a78bfa",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 10
  },
  declineBtn: {
    backgroundColor: "#ddd6fe",
    padding: 10,
    borderRadius: 8,
    flex: 1
  },
  btnText: {
    textAlign: "center",
    color: "#4c1d95",
    fontWeight: "bold"
  }
});
