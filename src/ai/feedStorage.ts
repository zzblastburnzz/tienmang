import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

export type FeedPost = {
  id: string;
  author: string;
  worldOrigin: string;
  content: string;
  createdAt: number;
};

const STORAGE_KEY = "npc_feed_list";

export async function saveFeedPost(post: Omit<FeedPost, "id" | "createdAt">) {
  const existing = await AsyncStorage.getItem(STORAGE_KEY);
  const list: FeedPost[] = existing ? JSON.parse(existing) : [];

  const newPost: FeedPost = {
    ...post,
    id: uuidv4(),
    createdAt: Date.now()
  };

  list.push(newPost);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export async function getFeedPosts(): Promise<FeedPost[]> {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  if (!json) return [];
  const list: FeedPost[] = JSON.parse(json);
  return list.sort((a, b) => b.createdAt - a.createdAt);
}
