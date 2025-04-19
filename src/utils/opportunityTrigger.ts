export function checkOpportunity(userProfile, interactions): string | null {
  // 1. Random chance
  const random = Math.random();
  if (random < 0.001) return "Ngươi có cảm nhận được luồng khí lạ phía Đông không?";

  // 2. Hành vi: giúp nhiều NPC
  const helpCount = interactions.filter(i => i.type === "job" && i.status === "done").length;
  if (helpCount >= 5) return "Ngươi là người đáng tin... ta muốn dạy ngươi một điều đặc biệt.";

  // 3. Nghề đặc biệt
  if (userProfile.bio.toLowerCase().includes("vẽ bùa") || userProfile.bio.includes("khai quật")) {
    return "Một lão nhân bí ẩn nhắn: Ngươi là người có duyên với thiên đạo. Theo ta không?";
  }

  return null;
}
