import AsyncStorage from "@react-native-async-storage/async-storage";

export async function isLoggedIn() {
  const creds = await AsyncStorage.getItem("user_credentials");
  const profile = await AsyncStorage.getItem("user_profile");
  return creds && profile ? true : false;
}

export async function logout() {
  await AsyncStorage.multiRemove(["user_credentials", "user_profile"]);
}

export async function getCurrentUser() {
  const creds = await AsyncStorage.getItem("user_credentials");
  const profile = await AsyncStorage.getItem("user_profile");
  if (!creds || !profile) return null;
  return {
    ...JSON.parse(creds),
    ...JSON.parse(profile),
    id: "user_me"
  };
}
