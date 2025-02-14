import axios from "axios";
import { API_BASE_URL } from "@/service/@index";

// =====================================
// 4) Atualizar Item (PUT /item/<int:id>)
// =====================================

interface UpdateItemProps {
  itemId: number;
  tombo: string;
  grupo_material: string;
}

export async function UpdateItem({ itemId, tombo, grupo_material }: UpdateItemProps) {
  const response = await axios.put(
    `${API_BASE_URL}/item/${itemId}`,
    { tombo, grupo_material }
  );
  return response.data;
}
