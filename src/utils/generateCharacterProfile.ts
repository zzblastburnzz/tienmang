export function generateCharacterProfile(seed?: number) {
  const names = ["Trầm Tiêu Dao", "Tiểu Linh Lung", "Vô Nhai Tử", "Băng Vân", "Lạc Ẩn", "Hỏa Long Ca"];
  const appearances = [
    "Tóc trắng dài, mặc áo tím lam, luôn mang hồ lô rượu.",
    "Áo xanh bạc, cài trâm ngọc, ánh mắt như hồ thu.",
    "Khoác áo choàng đen, không bao giờ để lộ chân diện.",
    "Tóc đỏ rực như lửa, thích đeo bông tai hình kiếm.",
    "Vẻ ngoài nhu mì nhưng thường đeo... búa rèn to tướng.",
    "Giống đạo sĩ thật nhưng đeo tai mèo giả."
  ];
  const personalities = ["hài hước", "nghiêm túc", "lạnh lùng", "đạo lý", "ngáo ngơ", "chảnh"];
  const quotes = [
    "Cái gì không giết được ta, thường khiến ta... muốn bỏ cuộc.",
    "Ngươi càng tu, ta càng ngủ.",
    "Đạo là gì? Là lý do để không đi làm sáng nay.",
    "Phi thăng là chuyện của năm sau, hôm nay ta nướng cá.",
    "Mỗi lần ta động đan, trời đều mưa.",
    "Ngươi không hiểu vì ngươi còn sống."
  ];
  const feedTopics = [
    "post meme tu tiên, chế ảnh trưởng môn",
    "viết đạo lý triết học bằng thơ",
    "đăng ảnh rèn kiếm, thiêu lò",
    "nói về thời tiết tu giới, rất vô ích nhưng hay",
    "tường thuật tu luyện thất bại như livestream",
    "nêu quote đạo lý đi kèm ảnh ngồi uống trà"
  ];
  const dramas = [
    "Từng giả làm trưởng lão để vào bí cảnh sớm.",
    "Bị tố 'chôm' công pháp rồi remix lại thành thơ.",
    "Đăng ảnh linh thạch giả khiến toàn phái hiểu nhầm.",
    "Tham gia quá nhiều nhóm chat rồi... quên xưng danh.",
    "Từng bị đệ tử mình bóc phốt vì đạo lý... dở tệ.",
    "Nổ đan quá 10 lần/tháng và bị cảnh báo khí hậu."
  ];
  const fameStars = ["★", "★★", "★★★", "★★★★", "★★★★★"];

  const i = seed !== undefined ? seed % 6 : Math.floor(Math.random() * 6);

  return {
    name: names[i],
    appearance: appearances[i],
    personality: personalities[i],
    quote: quotes[i],
    feedTopic: feedTopics[i],
    drama: dramas[i],
    fame: fameStars[Math.floor(Math.random() * 5) + 1]
  };
}
