import axios from "axios";
import { API_BASE_URL } from "@/service/@index";

// =====================================
// 1) Criar Sala (POST /sala)
// =====================================
export async function CreateSala(nome: string, itens: string[]) {
  const response = await axios.post(`${API_BASE_URL}/sala`, {
    nome,
    itens,
  });
  return response.data;
}

// =====================================
// 2) Listar todas as Salas (GET /sala)
// =====================================
export async function GetSalas() {
  const response = await axios.get(`${API_BASE_URL}/sala`);
  return response.data;
}

// =====================================
// 3) Obter uma Sala específica (GET /sala/<int:sala_id>)
// =====================================
export async function GetSala(salaId: number) {
  const response = await axios.get(`${API_BASE_URL}/sala/${salaId}`);
  return response.data;
}

// =====================================
// 4) Atualizar Sala (PUT /sala/<int:sala_id>)
// =====================================
export async function UpdateSala(salaId: number, nome: string, itens: string[]) {
  const response = await axios.put(`${API_BASE_URL}/sala/${salaId}`, {
    nome,
    itens,
  });
  return response.data;
}

// =====================================
// 5) Deletar Sala (DELETE /sala/<int:sala_id>)
// =====================================
export async function DeleteSala(salaId: number) {
  const response = await axios.delete(`${API_BASE_URL}/sala/${salaId}`);
  return response.data;
}

// =====================================
// 6) Criar Salas de Teste (POST /sala_teste)
// =====================================
export async function CreateTestSalas() {
  const response = await axios.post(`${API_BASE_URL}/sala_teste`);
  return response.data;
}
