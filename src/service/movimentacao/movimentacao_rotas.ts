import axios from "axios";
import { API_BASE_URL } from "@/service/@index";

// =====================================
// 1) Criar Movimentação (POST /movimentacao)
// =====================================
export async function CreateMovimentacao(itemId: number, destinoId: number, responsavel: number) {
  const response = await axios.post(`${API_BASE_URL}/movimentacao`, {
    item_id: itemId,
    destino_id: destinoId,
    responsavel,
  });
  return response.data;
}

// =====================================
// 2) Listar todas as Movimentações (GET /movimentacao)
// =====================================
export async function GetMovimentacoes() {
  const response = await axios.get(`${API_BASE_URL}/movimentacao`);
  return response.data;
}

// =====================================
// 3) Obter uma Movimentação específica (GET /movimentacao/<int:movimentacao_id>)
// =====================================
export async function GetMovimentacao(movimentacaoId: number) {
  const response = await axios.get(`${API_BASE_URL}/movimentacao/${movimentacaoId}`);
  return response.data;
}

// =====================================
// 4) Atualizar Movimentação (PUT /movimentacao/<int:movimentacao_id>)
// =====================================
export async function UpdateMovimentacao(movimentacaoId: number, itemId: number, destinoId: number, responsavel: number) {
  const response = await axios.put(`${API_BASE_URL}/movimentacao/${movimentacaoId}`, {
    item_id: itemId,
    destino_id: destinoId,
    responsavel,
  });
  return response.data;
}

// =====================================
// 5) Deletar Movimentação (DELETE /movimentacao/<int:movimentacao_id>)
// =====================================
export async function DeleteMovimentacao(movimentacaoId: number) {
  const response = await axios.delete(`${API_BASE_URL}/movimentacao/${movimentacaoId}`);
  return response.data;
}

// =====================================
// 6) Criar Movimentação Avançada (POST /movimentacao) - Movendo item para nova sala
// =====================================
export async function CreateMovimentacaoAvancada(itemId: number, salaId: number, userId: number) {
  const response = await axios.post(`${API_BASE_URL}/item_movimentacao`, {
    item_id: itemId,
    sala_id: salaId,
    user_id: userId,
  });
  return response.data;
}

// =====================================
// Criar Movimentação Múltipla (POST /item_movimentacao_multi)
// =====================================
export async function CreateMovimentacaoMultipla(itemIds: number[], salaId: number, userId: number) {
    const response = await axios.post(`${API_BASE_URL}/item_movimentacao_multi`, {
      item_id: itemIds,  // Array de IDs de itens a serem movimentados
      sala_id: salaId,   // ID da sala de destino
      user_id: userId,   // ID do usuário responsável
    });
    return response.data;
  }
