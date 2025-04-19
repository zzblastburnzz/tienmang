import { useState, useEffect } from "react";
import { injectCelestialPosts } from "../utils/injectCelestialPosts";

export function useStepProgress() {
  const [steps, setSteps] = useState(0);
  const [canBreakthrough, setCanBreakthrough] = useState(false);
  const [stage, setStage] = useState("Phàm nhân");

  useEffect(() => {
    const interval = setInterval(() => {
      const next = steps + Math.floor(Math.random() * 10);
      setSteps(next);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps]);

  useEffect(() => {
    if (steps >= 1000 && stage === "Phàm nhân") {
      setCanBreakthrough(true);
    } else if (steps >= 3000 && stage === "Luyện khí tầng 1") {
      setCanBreakthrough(true);
    }
  }, [steps, stage]);

  const confirmBreakthrough = () => {
    if (stage === "Phàm nhân") {
      setStage("Luyện khí tầng 1");
      injectCelestialPosts("Luyện khí tầng 1");
    } else if (stage === "Luyện khí tầng 1") {
      setStage("Luyện khí tầng 2");
      injectCelestialPosts("Luyện khí tầng 2");
    }
    setCanBreakthrough(false);
  };

  return {
    stage,
    canBreakthrough,
    confirmBreakthrough
  };
}
