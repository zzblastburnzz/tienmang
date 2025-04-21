import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initNpcList } from "../../data/npc/initNpcList";
import { repairNpcMissingAvatars } from "../ai/repairNpcMissingAvatars";

export function useNpcInitializer() {
  useEffect(() => {
    const setup = async () => {
      const exists = await AsyncStorage.getItem("npc_list");
      if (!exists) {
        const npcList = await initNpcList();
        await repairNpcMissingAvatars(npcList);
        await AsyncStorage.setItem("npc_list", JSON.stringify(npcList));
      }
    };
    setup();
  }, []);
}
