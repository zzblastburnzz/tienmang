import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateNpcPortraitPrompt } from "./generateNpcPortraitPrompt";
import { generateImageFromPrompt } from "./generateImageFromPrompt";

export async function repairNpcMissingAvatars(apiKey) {
  const raw = await AsyncStorage.getItem("npc_list");
  const list = raw ? JSON.parse(raw) : [];

  let updated = false;

  for (let npc of list) {
    if (!npc.avatar || npc.avatar === "" || npc.avatar === "null") {
      const prompt = generateNpcPortraitPrompt(npc);
      const imageUrl = await generateImageFromPrompt(prompt, apiKey);
      npc.avatar = imageUrl;
      npc.avatarPrompt = prompt;
      updated = true;
    }
  }

  if (updated) {
    await AsyncStorage.setItem("npc_list", JSON.stringify(list));
    console.log("Đã cập nhật avatar cho những NPC bị thiếu.");
  } else {
    console.log("Không có NPC nào bị thiếu avatar.");
  }
}
