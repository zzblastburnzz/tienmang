import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateFeedFromNpc } from "./generateFeedFromNpc";
import { saveFeedPost } from "./feedStorage";

const FEED_INTERVAL_MINUTES = 5;

type NPCProfile = {
  name: string;
  prompt: string;
  worldOrigin: string;
  traits?: {
    extroversion: number;
    emotionSensitivity: number;
  };
  lastPostedAt?: number;
};

export async function startAutoNpcFeed() {
  setInterval(async () => {
    const npcJson = await AsyncStorage.getItem("npc_list");
    if (!npcJson) return;
    const npcList: NPCProfile[] = JSON.parse(npcJson);

    const now = Date.now();

    for (let npc of npcList) {
      if (!npc.traits || npc.traits.extroversion === undefined) continue;

      const { extroversion, emotionSensitivity } = npc.traits;

      const chance = (extroversion * 0.5 + emotionSensitivity * 0.5) / 100;
      const shouldPost = Math.random() < chance;

      if (!shouldPost) continue;

      const lastPost = npc.lastPostedAt || 0;
      const minutesSinceLast = (now - lastPost) / 60000;

      if (minutesSinceLast < FEED_INTERVAL_MINUTES) continue;

      const content = await generateFeedFromNpc(npc);
      await saveFeedPost({
        author: npc.name,
        worldOrigin: npc.worldOrigin,
        content
      });

      npc.lastPostedAt = now;
    }

    await AsyncStorage.setItem("npc_list", JSON.stringify(npcList));
  }, FEED_INTERVAL_MINUTES * 60 * 1000);
}
