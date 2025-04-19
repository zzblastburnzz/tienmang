import history from "../data/transactionHistory.json";

export const getHistory = () => history;

export const addTransaction = (
  type: "spend" | "gain",
  description: string,
  amount: number,
  currency: "silver" | "gold" | "spiritStone"
) => {
  const newTx = {
    id: "tx-" + (history.length + 1),
    type,
    description,
    amount,
    currency,
    timestamp: new Date().toISOString()
  };
  history.unshift(newTx); // thêm mới vào đầu danh sách
};
