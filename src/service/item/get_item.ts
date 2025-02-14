import axios from "axios";
import { API_BASE_URL } from "@/service/@index";


// ============================================
// 3) Ler Um Item (GET /item/<int:item_id>)
// ============================================

export async function GetItem(itemId: number) {
  const response = await axios.get(`${API_BASE_URL}/item/${itemId}`);
  return response.data;
}