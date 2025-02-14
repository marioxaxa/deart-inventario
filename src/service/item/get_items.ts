import axios from "axios";
import { API_BASE_URL } from "@/service/@index";

// ==================================
// 2) Ler Todos os Itens (GET /item)
// ==================================

export async function GetItems() {
  const response = await axios.get(`${API_BASE_URL}/item`);
  return response.data;
}
