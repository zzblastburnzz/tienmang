import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const events = [
  "Trên trời hiện dị tượng, có người vừa bước vào cảnh giới mới...",
  "Thiên địa dao động nhẹ – ai đó trong vùng này vừa ngộ đạo.",
  "Gió đổi hướng, cây nghiêng mình – có người đã kết đan thành công.",
  "Bạn vừa cảm nhận được dao động kỳ lạ từ phương Đông..."
];

export default function CelestialEventNotifier() {
  const [event, setEvent] = useState<string | null>(null);
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      const random = Math.random();
      if (random < 0.1) {
        const chosen = events[Math.floor(Math.random() * events.length)];
        setEvent(chosen);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true
        }).start(() => {
          setTimeout(() => {
            Animated.timing(opacity, {
              toValue: 0,
              duration: 800,
              useNativeDriver: true
            }).start(() => setEvent(null));
          }, 6000);
        });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!event) return null;

  return (
    <Animated.View style={[styles.banner, { opacity }]}>
      <Text style={styles.text}>{event}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#e0e7ff",
    padding: 15,
    borderRadius: 10,
    margin: 10,
    borderColor: "#818cf8",
    borderWidth: 2
  },
  text: {
    color: "#3730a3",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center"
  }
});
