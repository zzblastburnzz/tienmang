export function generateVipChallenge(playerProfile) {
  const bio = playerProfile.bio.toLowerCase();

  if (bio.includes("vẽ") || bio.includes("thiết kế")) {
    return {
      title: "Vẽ biểu tượng cho đạo quán",
      detail: "Vị tông chủ cần một bức họa mang đạo vận. Hãy vẽ và gửi hình trong chat."
    };
  }

  if (bio.includes("bán hàng") || bio.includes("kinh doanh")) {
    return {
      title: "Bày hàng bên bờ sông Linh",
      detail: "Dẫn dắt 3 người chơi khác đến mua hàng của bạn trong vòng 3 ngày."
    };
  }

  if (bio.includes("ít nói") || playerProfile.interactions < 3) {
    return {
      title: "Bế quan ẩn tu",
      detail: "Không đăng bài, không bình luận trong 48 giờ để tích tụ khí linh."
    };
  }

  return {
    title: "Trò chuyện cùng người lạ",
    detail: "Trò chuyện với ít nhất 2 nhân vật mới để trao đổi tri kiến đạo lý."
  };
}
