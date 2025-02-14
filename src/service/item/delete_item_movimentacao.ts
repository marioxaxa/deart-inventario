import axios from "axios";
import { API_BASE_URL } from "@/service/@index";

// ========================================================================
// 7) Deletar Movimentação de um Item (DELETE /item/<id>/movimentacoes/<id>)
// ========================================================================

export async function DeleteItemMovimentacao(itemId: number, movimentacaoId: number) {
  const response = await axios.delete(
    `${API_BASE_URL}/item/${itemId}/movimentacoes/${movimentacaoId}`
  );
  return response.data;
}
