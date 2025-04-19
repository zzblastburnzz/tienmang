export function calculatePriority(post) {
  const base = 10;
  const kolBoost = post.author.isKOL ? 20 : post.author.followers > 100 ? 10 : 0;
  const interactionBoost = (post.likes || 0) + (post.comments || 0) * 3;
  const ageInHours = (Date.now() - new Date(post.createdAt).getTime()) / (1000 * 60 * 60);
  const agePenalty = Math.floor(ageInHours);

  return base + kolBoost + interactionBoost - agePenalty;
}

export function sortPostsByPriority(posts) {
  return [...posts]
    .map(post => ({
      ...post,
      priorityScore: calculatePriority(post)
    }))
    .sort((a, b) => b.priorityScore - a.priorityScore);
}
