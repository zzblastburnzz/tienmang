import { mockTransactions } from "../data/mockTransactions";

export function getHistory() {
  return mockTransactions.map(t => t.item || t.source).join(", ");
}
