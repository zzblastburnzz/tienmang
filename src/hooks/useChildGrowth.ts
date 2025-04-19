import { useEffect, useState } from "react";

export function useChildGrowth(birthDate: string) {
  const [ageStage, setAgeStage] = useState("sơ sinh");
  const [potentialEvent, setPotentialEvent] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const born = new Date(birthDate);
    const daysAlive = Math.floor((now.getTime() - born.getTime()) / (1000 * 60 * 60 * 24));

    if (daysAlive >= 30 && ageStage === "sơ sinh") {
      setAgeStage("biết nói");
      if (Math.random() < 0.3) {
        setPotentialEvent("Đứa trẻ đã mơ thấy một lão đạo nhân truyền khẩu quyết!");
      }
    }

    if (daysAlive >= 90 && ageStage === "biết nói") {
      setAgeStage("học chữ");
      if (Math.random() < 0.2) {
        setPotentialEvent("Một cuốn sách cũ rơi từ kệ... Đứa trẻ mở ra và chăm chú nhìn vào hình vẽ.");
      }
    }

    if (daysAlive >= 150 && ageStage === "học chữ") {
      setAgeStage("cảm ứng linh khí");
      if (Math.random() < 0.1) {
        setPotentialEvent("Khi đứng gần đàn tụ khí, đứa trẻ bỗng dưng rung động khí mạch...");
      }
    }
  }, [birthDate, ageStage]);

  return { ageStage, potentialEvent };
}
