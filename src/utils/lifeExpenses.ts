import { spendMoney, getWallet } from "./wallet";

export function applyDailyExpenses() {
  try {
    spendMoney("silver", 500); // tiền thuê nhà mỗi ngày
    console.log("✅ Đã trừ 500 tiền đồng thuê nhà.");
  } catch (err) {
    console.warn("❌ Không đủ tiền thuê nhà. Bạn bị đuổi khỏi nhà.");
    return "evicted";
  }

  return "ok";
}

export function applyWeeklyTax() {
  try {
    spendMoney("gold", 1); // thuế tu chân mỗi tuần
    console.log("💸 Đã trừ 1 vàng (thuế tu chân).");
  } catch (err) {
    console.warn("❌ Không đủ vàng đóng thuế. Bạn bị cấm vào khu chợ tu tiên.");
    return "tax_failed";
  }

  return "ok";
}
