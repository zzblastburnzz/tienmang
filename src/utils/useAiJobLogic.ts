export function getTasksByJob(job: string) {
  if (job.includes("quán ăn")) {
    return ["phụ bưng bê", "dọn bàn", "giao hàng"];
  }
  if (job.includes("đồ cổ")) {
    return ["trông cửa hàng", "phân loại vật phẩm", "ghi chép giao dịch"];
  }
  if (job.includes("trà đạo")) {
    return ["thiết kế bảng hiệu", "quảng bá sản phẩm", "viết bài chia sẻ"];
  }
  return ["hỏi thăm", "trò chuyện", "giao lưu"];
}
