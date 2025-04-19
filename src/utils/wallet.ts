import walletData from "../data/userWallet.json";

// 🪙 Lấy thông tin ví
export const getWallet = () => walletData;

// ➕ Cộng tiền (thường dùng sau khi hoàn thành nhiệm vụ)
export const addMoney = (type: "gold" | "silver" | "spiritStone", amount: number) => {
  walletData[type] += amount;
};

// ➖ Trừ tiền (mua đồ, đóng thuế...)
export const spendMoney = (type: "gold" | "silver" | "spiritStone", amount: number) => {
  if (walletData[type] < amount) throw new Error("Không đủ tiền!");
  walletData[type] -= amount;
};
