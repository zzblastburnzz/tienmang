import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/navigation/AppNavigator";
import { useNpcInitializer } from "./src/hooks/useNpcInitializer";
import { startAutoNpcFeed } from "./src/ai/npcAutoFeed";
import { fixNpcList_AddMissingTraits } from "./src/ai/fixNpcList";
import { repairNpcMissingAvatars } from "./src/ai/repairNpcMissingAvatars";
import { OPENAI_API_KEY } from "@env";

export default function App() {
  useNpcInitializer();

  useEffect(() => {
    startAutoNpcFeed();
    fixNpcList_AddMissingTraits();

    const runFix = async () => {
      await repairNpcMissingAvatars(OPENAI_API_KEY);
    };

    runFix();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <AppNavigator />
    </>
  );
}
