import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "../screens/feed/FeedScreen";
import StoryFeedScreen from "../screens/feed/StoryFeedScreen";
import KOLFeedScreen from "../screens/feed/KOLFeedScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import ChatRoomScreen from "../screens/chat/ChatRoomScreen";
import FriendSuggestionScreen from "../screens/FriendSuggestionScreen";
import FriendSuggestionInline from "../screens/FriendSuggestionInline";
import SignupScreen from "../screens/auth/SignupScreen";
import CreateProfileScreen from "../screens/profile/CreateProfileScreen";
import UserProfileScreen from "../screens/profile/UserProfileScreen";
import { isLoggedIn } from "../utils/auth";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Gợi ý" component={FriendSuggestionScreen} />
      <Tab.Screen name="Đăng bài" component={CreatePostScreen} />
      <Tab.Screen name="Cá nhân" component={UserProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [initialRoute, setInitialRoute] = useState("Signup");

  useEffect(() => {
    const check = async () => {
      const logged = await isLoggedIn();
      setInitialRoute(logged ? "Main" : "Signup");
    };
    check();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="StoryFeed" component={StoryFeedScreen} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
        <Stack.Screen name="FriendSuggestionInline" component={FriendSuggestionInline} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
