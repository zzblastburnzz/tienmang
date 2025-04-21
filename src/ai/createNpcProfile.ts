import { generateNpcPortraitPrompt } from "./generateNpcPortraitPrompt";
import { generateImageFromPrompt } from "./generateImageFromPrompt";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function createNpcProfile(npcBase, apiKey) {
  const npc = { ...npcBase };

  const prompt = generateNpcPortraitPrompt(npc);
  const imageUrl = await generateImageFromPrompt(prompt, apiKey);
  npc.avatar = imageUrl;
  npc.avatarPrompt = prompt;

  // Lưu vào AsyncStorage
  const list = await AsyncStorage.getItem("npc_list");
  const all = list ? JSON.parse(list) : [];
  all.push(npc);
  await AsyncStorage.setItem("npc_list", JSON.stringify(all));

  return npc;
}
