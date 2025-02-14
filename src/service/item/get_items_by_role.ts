import axios from "axios";
import { API_BASE_URL } from "@/service/@index";

export async function GetItemsByRole(role: string) {
  const response = await axios.get(`${API_BASE_URL}/item_role`, {
    params: { role }
  });
  return response.data;
}
