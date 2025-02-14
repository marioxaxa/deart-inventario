import axios from "axios";
import { API_BASE_URL } from "@/service/@index";

interface CreateItemProps {
    tombo: string;
    grupo_material: string;
    localizacao?: number
}

export async function CreateItem({ tombo, grupo_material, localizacao }: CreateItemProps) {
    const response = await axios.post(
        `${API_BASE_URL}/item`,
        {
            tombo, 
            grupo_material,
            localizacao
        }
    )
    return response.data
}