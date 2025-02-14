import axios from "axios";
import { API_BASE_URL } from "@/service/@index";

// =====================================
// 5) Deletar Item (DELETE /item/<int:id>)
// =====================================

export async function DeleteItem(itemId: number) {
  const response = await axios.delete(`${API_BASE_URL}/item/${itemId}`);
  return response.data;
}
