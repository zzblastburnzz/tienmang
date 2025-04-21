export type CharacterProfile = {
  id: string;
  name: string;
  avatar: string;
  coverImage: string;
  sect: string;             // Môn phái
  residence: string;        // Nơi ở
  cultivationLevel: string; // Tu vi
  appearanceStyle: string;  // Hình tượng
  avatarPrompt: string;     // Prompt tạo avatar
  coverPrompt: string;      // Prompt tạo cover
};
