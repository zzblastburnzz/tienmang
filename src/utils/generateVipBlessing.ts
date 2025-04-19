export function generateVipBlessing(vipName: string) {
  const rand = Math.random();

  if (rand < 0.05) {
    return {
      from: vipName,
      type: "📜 Công pháp quý hiếm",
      content: "Ngươi có duyên với công pháp 'Thiên Linh Vô Ảnh'. Hãy tu luyện cẩn trọng.",
    };
  } else if (rand < 0.15) {
    return {
      from: vipName,
      type: "🗺️ Gợi ý bí cảnh",
      content: "Về phía Tây Bắc, sau Thạch Sơn Động, là nơi ẩn giấu 1 linh trận cổ.",
    };
  } else if (rand < 0.35) {
    return {
      from: vipName,
      type: "💎 Linh vật được ban",
      content: "Ngươi nhận được 1 Linh Thạch Tinh Khiết.",
    };
  } else {
    return {
      from: vipName,
      type: "💬 Lời khuyên từ cao nhân",
      content: "Đừng sợ khó khăn. Lửa thử vàng, gian khổ luyện tâm.",
    };
  }
}
