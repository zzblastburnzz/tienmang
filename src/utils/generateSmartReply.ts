type AIProfile = {
  name: string;
  style: "funny" | "serious" | "cold" | "cute";
  toneBias?: string;
  memory?: string[];
  keywords?: string[];
};

export function generateSmartReply(userMessage: string, ai: AIProfile, tone: string): string {
  const msg = userMessage.toLowerCase();

  if (msg.includes("trăng") || msg.includes("sáng")) {
    if (ai.style === "funny") return "Ánh trăng sáng do đan phòng bị nổ nồi đó, tin không? 🌕💥";
    if (ai.style === "cold") return "Trăng? Liên quan đến tu vi ngươi à?";
    if (ai.style === "cute") return "Trăng giống cái đèn treo á, dễ thương ghê!";
    return "Trăng sáng là vì lòng người chưa tĩnh.";
  }

  if (msg.includes("phi thăng")) {
    if (ai.style === "funny") return "Ta phi tới cổng rồi... mà quên mang linh thạch 😅";
    if (ai.style === "cold") return "Ngươi còn chưa đả thông mạch khí, nói gì đến phi thăng?";
    return "Phi thăng không dễ. Đôi khi cần buông bỏ để nhẹ thân.";
  }

  if (msg.includes("đạo") || msg.includes("ngộ")) {
    return ai.style === "serious"
      ? "Ngươi có duyên cảm đạo. Hãy lắng nghe tiếng vọng trong tâm."
      : "Đạo lý là gì? Là biết khi nào nên ăn và khi nào nên... ăn nữa.";
  }

  if (tone === "funny") return "Hahaha, pha đó đỉnh cao, đáng lưu lại hậu thế!";
  if (tone === "cold") return "Ít lời là tốt, nhiều lời loạn tâm.";
  if (tone === "cute") return "Nói vậy tui hiểu... một chút á~";
  return "Đạo lý nằm sau từng câu chuyện. Cứ kể tiếp, ta nghe.";

}
