import React from 'react'
import { API } from '@/service/@index'
import { useQuery } from '@tanstack/react-query'
import { Item } from '@/features/equipamentos/data/item'
import { Sala } from '@/features/equipamentos/data/sala'
import { Mov } from '@/features/equipamentos/data/mov'
import { User } from '@/features/users/data/schema'

interface EquipamentoContextType {
    itemsList: Item[],
    salasList: Sala[],
    movList: Mov[],
    userList: User[]
}

const EquipamentoContext = React.createContext<EquipamentoContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export function EquipamentoProvider({ children }: Props) {


  const { data: itemsList } = useQuery({
    queryKey: ["itemsListContext"],
    queryFn: async () => {
        const response = await API.GetItems();
        return response;
    },
    });

    const { data: salasList } = useQuery({
      queryKey: ["salasListContext"],
      queryFn: async () => {
          const response = await API.GetSalas();
          return response;
      },
      });

      const { data: movList } = useQuery({
        queryKey: ["movListContext"],
        queryFn: async () => {
            const response = await API.GetMovimentacoes();
            return response;
        },
        });

        const { data: userList } = useQuery({
          queryKey: ["userListContext"],
          queryFn: async () => {
              const response = await API.GetUsers();
              return response;
          },
          });

  return (
    <EquipamentoContext.Provider value={{ itemsList, salasList, movList, userList }}>
      {children}
    </EquipamentoContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useEquipamento = () => {
  const equipamentoContext = React.useContext(EquipamentoContext)

  if (!equipamentoContext) {
    throw new Error('useEquipamento has to be used within <EquipamentoContext.Provider>')
  }

  return equipamentoContext
}
