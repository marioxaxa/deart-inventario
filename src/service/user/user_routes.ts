import axios from "axios";
import { API_BASE_URL } from "@/service/@index";

// =====================================
// 1) Login do Usuário (POST /login)
// =====================================
export async function Login(username: string, password: string) {
  const response = await axios.post(`${API_BASE_URL}/login`, {
    username,
    password,
  });
  return response.data;
}

// =====================================
// 2) Logout do Usuário (GET /logout)
// =====================================
export async function Logout() {
  const response = await axios.get(`${API_BASE_URL}/logout`);
  return response.data;
}

// =====================================
// 3) Obter Todos os Usuários (GET /user)
// =====================================
export async function GetUsers() {
  const response = await axios.get(`${API_BASE_URL}/user`);
  return response.data;
}

// =====================================
// 4) Criar Usuário (POST /user)
// =====================================
export async function CreateUser(username: string, password: string) {
  const response = await axios.post(`${API_BASE_URL}/user`, {
    username,
    password,
  });
  return response.data;
}

// =====================================
// 5) Obter Usuário Específico (GET /user/<int:user_id>)
// =====================================
export async function GetUser(userId: number) {
  const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
  return response.data;
}

// =====================================
// 6) Atualizar Usuário (PUT /user/<int:id_user>)
// =====================================
export async function UpdateUser(userId: number, password: string) {
  const response = await axios.put(`${API_BASE_URL}/user/${userId}`, {
    password,
  });
  return response.data;
}

// =====================================
// 7) Deletar Usuário (DELETE /user/<int:user_id>)
// =====================================
export async function DeleteUser(userId: number) {
  const response = await axios.delete(`${API_BASE_URL}/user/${userId}`);
  return response.data;
}

// =====================================
// 8) Criar Usuários de Teste (POST /users_test)
// =====================================
export async function CreateTestUsers() {
  const response = await axios.post(`${API_BASE_URL}/users_test`);
  return response.data;
}
