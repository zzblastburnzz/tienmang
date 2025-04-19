import { mockPosts } from "../data/mockPosts";
import { mockMembers } from "../data/mockMembers";

export function injectCelestialPosts() {
  return [...mockPosts, {
    author: "Thiên Đạo",
    content: "🌌 Dị tượng: Có người sắp phi thăng!",
    comments: [`${mockMembers[0].name} đã cảm nhận được khí động.`],
    reactions: {},
    userReaction: null
  }];
}
