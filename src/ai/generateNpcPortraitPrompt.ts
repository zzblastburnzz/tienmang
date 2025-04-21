export function generateNpcPortraitPrompt(npc) {
  const {
    name,
    sect = "Vô Danh Môn",
    worldOrigin = "Địa Cầu",
    appearanceStyle = "bí ẩn",
    cultivationLevel = "Trúc Cơ kỳ"
  } = npc;

  return (
    `A fantasy digital portrait of a ${appearanceStyle} cultivator named ${name}, from the sect '${sect}', ` +
    `originating from ${worldOrigin}, at the level of ${cultivationLevel}. The image should feature traditional ` +
    `Chinese fantasy aesthetics, glowing aura, detailed clothing, mystical lighting, elegant facial features, and ` +
    `epic style. Solo full portrait with clean background.`
  );
}
