export function generateAIReply(message, context) {
  const lower = message.toLowerCase();

  // React to user tone
  if (lower.includes("sáng") && context.lastPost?.content?.includes("trăng")) {
    return "Là vì lòng ngươi đang có mây, nên đạo mới phản chiếu rõ ràng...";
  }

  if (lower.includes("đẹp") || lower.includes("ảnh")) {
    return "Hôm đó linh khí tốt, chụp gì cũng thấy sáng rỡ một cách lạ kỳ ✨";
  }

  if (context.recentReaction === "😢") {
    return "Gần đây ngươi có vẻ buồn. Hãy để bản tọa kể ngươi nghe một đoạn cổ sử để khuây khoả...";
  }

  if (context.recentReaction === "🤣") {
    return "Hahaha, bản tọa biết ngươi sẽ thích pha đó. Tấu hài là cũng là một đạo!";
  }

  // Default
  return "Ngươi muốn luận đạo hay kể chuyện hôm nay?";
}
