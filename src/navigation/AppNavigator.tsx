import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/feed/FeedScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import CreateProfileScreen from "../screens/profile/CreateProfileScreen";
import { isLoggedIn } from "../utils/auth";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [initialRoute, setInitialRoute] = useState("Signup");

  useEffect(() => {
    const check = async () => {
      const logged = await isLoggedIn();
      setInitialRoute(logged ? "Feed" : "Signup");
    };
    check();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
