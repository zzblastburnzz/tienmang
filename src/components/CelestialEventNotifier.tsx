import React, { useEffect, useState } from "react";
import { View, Text, Animated } from "react-native";

export default function CelestialEventNotifier() {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, [opacity]);

  return (
    <Animated.View style={{ opacity }}>
      <Text>🌠 Dị tượng thiên đạo xuất hiện!</Text>
    </Animated.View>
  );
}
