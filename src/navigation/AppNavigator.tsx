import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

// Dummy screens (anh sẽ import real screen vào sau)
const SignupScreen = () => <Text>Signup</Text>;
const FeedScreen = () => <Text>Bảng tin</Text>;
const ChatScreen = () => <Text>Trò chuyện</Text>;
const OrganizationScreen = () => <Text>Tổ chức</Text>;
const ProfileScreen = () => <Text>Cá nhân</Text>;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={FeedScreen} options={{ title: "Bảng tin" }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ title: "Trò chuyện" }} />
      <Tab.Screen name="Organization" component={OrganizationScreen} options={{ title: "Tổ chức" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Cá nhân" }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
