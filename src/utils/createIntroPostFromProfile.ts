import { generateCharacterProfile } from "./generateCharacterProfile";

export function createIntroPostFromProfile(profile) {
  return {
    id: "POST_" + profile.name.replace(/\s/g, "_"),
    author: profile.name,
    avatar: "/images/npc/" + profile.name.replace(/\s/g, "_").toLowerCase() + ".png",
    content: profile.quote + " (#" + profile.feedTopic + ")",
    createdAt: new Date().toISOString(),
    reactions: {},
    comments: [],
    userReaction: null,
    priorityScore: 50 + profile.fame.length * 5 // boost based on fame stars
  };
}

// Ví dụ tạo mới nhân vật và đẩy post đầu tiên:
export function createKOLWithIntroPost(seed) {
  const profile = generateCharacterProfile(seed);
  const post = createIntroPostFromProfile(profile);
  return { profile, post };
}
