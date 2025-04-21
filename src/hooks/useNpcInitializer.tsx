import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNpcProfile } from "../ai/createNpcProfile";

const STORAGE_KEY = "npc_list";

export function useNpcInitializer() {
  useEffect(() => {
    const initNPCs = async () => {
      try {
        const existing = await AsyncStorage.getItem(STORAGE_KEY);
        if (existing) return;

        const npcList = Array.from({ length: 10 }, () => createNpcProfile());
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(npcList));
        console.log("📦 NPC mặc định đã được sinh!");
      } catch (err) {
        console.error("❌ Lỗi khi khởi tạo NPC:", err);
      }
    };

    initNPCs();
  }, []);
}
