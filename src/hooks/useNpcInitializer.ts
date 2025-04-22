import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initNpcList } from "../data/initNpcList";

export function useNpcInitializer() {
  useEffect(() => {
    const setup = async () => {
      try {
        const existing = await AsyncStorage.getItem("npc_list");
        if (!existing) {
          const npcList = await initNpcList();
          await AsyncStorage.setItem("npc_list", JSON.stringify(npcList));
        }
      } catch (error) {
        console.error("Lỗi khi khởi tạo NPC:", error);
      }
    };
    setup();
  }, []);
}
