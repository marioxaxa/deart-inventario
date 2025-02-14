import { CreateItem } from "./item/create_item";
import { DeleteItem } from "./item/delete_item";
import { DeleteItemMovimentacao } from "./item/delete_item_movimentacao";
import { GetItem } from "./item/get_item";
import { GetItemMovimentacoes } from "./item/get_item_movimentacao";
import { GetItems } from "./item/get_items";
import { GetItemsByRole } from "./item/get_items_by_role";
import { UpdateItem } from "./item/update_item";
import { CreateMovimentacao, CreateMovimentacaoAvancada, CreateMovimentacaoMultipla, DeleteMovimentacao, GetMovimentacao, GetMovimentacoes } from "./movimentacao/movimentacao_rotas";
import { CreateSala, DeleteSala, GetSala, GetSalas, UpdateSala } from "./sala/sala_rotas";
import { CreateUser, DeleteUser, GetUser, GetUsers, Login, Logout, UpdateUser } from "./user/user_routes";

//export const API_BASE_URL = "https://apifb.seubone.com";
export const API_BASE_URL = "http://localhost:5000";

export class API {
  
  // Item
  static CreateItem = CreateItem
  static GetItem = GetItem
  static GetItemMovimentacoes = GetItemMovimentacoes
  static DeleteItemMovimentacao = DeleteItemMovimentacao
  static DeleteItem = DeleteItem
  static UpdateItem = UpdateItem
  static GetItems = GetItems
  static GetItemsByRole = GetItemsByRole
  
  // Sala
  static GetSalas = GetSalas
  static GetSala = GetSala
  static CreateSala = CreateSala
  static UpdateSala = UpdateSala
  static DeleteSala = DeleteSala

  // Movimentação
  static CreateMovimentacao = CreateMovimentacao
  static CreateMovimentacaoAvancada = CreateMovimentacaoAvancada
  static GetMovimentacoes = GetMovimentacoes
  static GetMovimentacao = GetMovimentacao
  static DeleteMovimentacao = DeleteMovimentacao
  static CreateMovimentacaoMultipla = CreateMovimentacaoMultipla

  // User
  static GetUsers = GetUsers
  static CreateUser = CreateUser
  static UpdateUser = UpdateUser
  static DeleteUser = DeleteUser
  static GetUser = GetUser
  static Login = Login
  static Logout = Logout
}
