import AsyncStorage from "@react-native-async-storage/async-storage";

export async function fixNpcList_AddMissingTraits() {
  const raw = await AsyncStorage.getItem("npc_list");
  if (!raw) return;

  const list = JSON.parse(raw);
  const updated = list.map((npc) => {
    if (!npc.traits) {
      npc.traits = {
        extroversion: Math.floor(Math.random() * 101),
        humor: Math.floor(Math.random() * 101),
        ego: Math.floor(Math.random() * 101),
        discipline: Math.floor(Math.random() * 101),
        emotionSensitivity: Math.floor(Math.random() * 101),
        mystery: Math.floor(Math.random() * 101),
      };
    }
    return npc;
  });

  await AsyncStorage.setItem("npc_list", JSON.stringify(updated));
  console.log("✅ Đã bổ sung traits cho các NPC thiếu.");
}
