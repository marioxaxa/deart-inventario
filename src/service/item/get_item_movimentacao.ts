import axios from "axios";
import { API_BASE_URL } from "@/service/@index";


// ====================================================
// 6) Ler Movimentações de Um Item (GET /item/<id>/movimentacoes)
// ====================================================

export async function GetItemMovimentacoes(itemId: number) {
  const response = await axios.get(`${API_BASE_URL}/item/${itemId}/movimentacoes`);
  return response.data;
}
