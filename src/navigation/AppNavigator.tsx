import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import SignupScreen from "../screens/auth/SignupScreen";
import LoginScreen from "../screens/auth/LoginScreen";

import FeedScreen from "../screens/feed/FeedScreen";
import KOLFeedScreen from "../screens/feed/KOLFeedScreen";
import MemeHallScreen from "../screens/feed/MemeHallScreen";
import SuggestionScreen from "../screens/feed/SuggestionScreen";
import StoryFeedScreen from "../screens/feed/StoryFeedScreen";

import ChatScreen from "../screens/chat/ChatScreen";
import ChatRoomScreen from "../screens/chat/ChatRoomScreen";

import OrganizationScreen from "../screens/org/MonPhaiScreen";
import CreateSectScreen from "../screens/org/CreateSectScreen";
import SectManagementScreen from "../screens/org/SectManagementScreen";
import SectHistoryScreen from "../screens/org/SectHistoryScreen";
import IntersectDiplomacyScreen from "../screens/org/IntersectDiplomacyScreen";

import CreateCompanyScreen from "../screens/org/CreateCompanyScreen";
import CompanyOrdersScreen from "../screens/org/CompanyOrdersScreen";
import CompanyReviewScreen from "../screens/org/CompanyReviewScreen";
import CompanyRankingScreen from "../screens/org/CompanyRankingScreen";
import CompanyMembersScreen from "../screens/org/CompanyMembersScreen";
import InternalTaskScreen from "../screens/org/InternalTaskScreen";
import ContributionHistoryScreen from "../screens/org/ContributionHistoryScreen";
import AutoRewardSummaryScreen from "../screens/org/AutoRewardSummaryScreen";
import FriendSuggestionScreen from "../screens/chat/FriendSuggestionScreen";
import UnifiedProfileScreen from "../screens/profile/UnifiedProfileScreen";
import PostDetailScreen from "../screens/PostDetailScreen";

import ProfileScreen from "../screens/profile/ProfileScreen";
import VIPStatusScreen from "../screens/profile/VIPStatusScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={FeedScreen} options={{ title: "Bảng tin" }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ title: "Trò chuyện" }} />
      <Tab.Screen name="Organization" component={OrganizationScreen} options={{ title: "Môn phái" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Cá nhân" }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
        <Stack.Screen name="StoryFeed" component={StoryFeedScreen} />
        <Stack.Screen name="Suggestion" component={SuggestionScreen} />
        <Stack.Screen name="KOLFeed" component={KOLFeedScreen} />
        <Stack.Screen name="MemeHall" component={MemeHallScreen} />
        <Stack.Screen name="CreateSect" component={CreateSectScreen} />
        <Stack.Screen name="SectManage" component={SectManagementScreen} />
        <Stack.Screen name="SectHistory" component={SectHistoryScreen} />
        <Stack.Screen name="IntersectDiplomacy" component={IntersectDiplomacyScreen} />
        <Stack.Screen name="CreateCompany" component={CreateCompanyScreen} />
        <Stack.Screen name="CompanyOrders" component={CompanyOrdersScreen} />
        <Stack.Screen name="CompanyReview" component={CompanyReviewScreen} />
        <Stack.Screen name="CompanyRanking" component={CompanyRankingScreen} />
        <Stack.Screen name="CompanyMembers" component={CompanyMembersScreen} />
        <Stack.Screen name="InternalTasks" component={InternalTaskScreen} />
        <Stack.Screen name="ContributionHistory" component={ContributionHistoryScreen} />
        <Stack.Screen name="AutoRewardSummary" component={AutoRewardSummaryScreen} />
        <Stack.Screen name="VIPStatus" component={VIPStatusScreen} />
	<Stack.Screen name="FriendSuggestion" component={FriendSuggestionScreen} />
	<Stack.Screen name="ProfileView" component={UnifiedProfileScreen} />
	<Stack.Screen name="CharacterProfile" component={UnifiedProfileScreen} />
	<Stack.Screen name="PostDetail" component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
