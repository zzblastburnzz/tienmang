import mockPosts from "../data/mockPosts.json";
import members from "../data/members.json";

export function injectCelestialPosts(stage: string) {
  const messages = [
    `Ta cảm nhận được một người vừa đạt ${stage}...`,
    `Trời vừa đổi hướng gió – hẳn là ai đó mới thăng cảnh giới.`,
    `Không gian hơi rung động... chắc chắn có người ngộ đạo!`,
    `Linh khí dao động! Có người mới tu thành ${stage}?`
  ];

  for (let i = 0; i < 4; i++) {
    const m = members[Math.floor(Math.random() * members.length)];
    const post = {
      id: "post-celestial-" + Date.now() + "-" + i,
      author: m.name,
      avatar: m.avatar,
      content: messages[i],
      isJob: false
    };
    mockPosts.unshift(post);
  }
}
