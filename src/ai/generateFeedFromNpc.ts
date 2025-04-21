type NPCProfile = {
  name: string;
  worldOrigin: string;
  traits: {
    extroversion: number;
    humor: number;
    ego: number;
    discipline: number;
    emotionSensitivity: number;
    mystery: number;
  };
};

export async function generateFeedFromNpc(npc: NPCProfile): Promise<string> {
  const quotes = [
    "Hôm nay linh khí tụ lại mạnh mẽ, ta luyện công thấy rõ tiến triển!",
    "Có ai thấy đan lô của ta không... hình như nó chạy mất rồi 😭",
    "Tu tiên không khó, khó là lòng người!",
    "Tự dưng thấy nhớ Địa Cầu ghê luôn á...",
    "Ai muốn lập nhóm khám phá Phong Vân Cốc không?",
    "Thế giới này thật rộng lớn... còn ta thì bé nhỏ 😔"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return `${npc.name} từ ${npc.worldOrigin} viết: “${randomQuote}”`;
}
