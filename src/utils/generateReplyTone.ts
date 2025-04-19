export function generateReplyTone(message: string, userStyle: string) {
  const msg = message.toLowerCase();

  if (msg.includes("phi thăng") || msg.includes("bao giờ lên cảnh giới")) {
    return "cute"; // ngây thơ hỏi đạo
  }

  if (msg.includes("hài") || msg.includes("haha") || msg.includes("tấu")) {
    return "funny";
  }

  if (msg.includes("ngộ") || msg.includes("đạo lý") || msg.includes("tu tâm")) {
    return "serious";
  }

  if (msg.includes("câm") || msg.includes("nhiều chuyện") || msg.includes("kệ")) {
    return "cold";
  }

  // Theo style người dùng nếu không rõ
  if (userStyle === "hài") return "funny";
  if (userStyle === "trầm") return "serious";
  if (userStyle === "lạnh") return "cold";

  return "serious"; // mặc định nghiêm túc
}
