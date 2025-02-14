import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from './data-table-column-header'
import { useEquipamento } from '@/context/equipamento-context'
import { Mov } from '@/features/equipamentos/data/mov'

export const columns: ColumnDef<Mov>[] = [
  {
    accessorKey: 'item_id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Tombo' />
    ),
    cell: ({ row }) => {
    
      const {itemsList} = useEquipamento()

      const item = itemsList.find(item => item.id === row.getValue('item_id'))
    
    return <div className='w-[80px]'>{item?.tombo}</div>},
    enableSorting: false,
    enableHiding: false,
    filterFn: (row, id, value) => {
      const { itemsList } = useEquipamento();
      const item = itemsList.find((item) => item.id === row.getValue(id));
      return item ? item.tombo.includes(value) : false;
    }
  },
  {
    accessorKey: 'destino_id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Destino' />
    ),
    cell: ({ row }) => {

      const { salasList } = useEquipamento()

      const sala = salasList.find(sala => sala.id === row.getValue('destino_id'))

      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {sala?.nome}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'responsavel',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Responsavel' />
    ),
    cell: ({ row }) => {

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { userList } = useEquipamento()

      const user = userList.find(user => user.id === row.getValue('responsavel'))

      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {user?.username}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'data',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Data' />
    ),
    cell: ({ row }) => {

      const date = new Date(row.getValue('data'))

      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {date?.getDate()}/{date?.getMonth()}/{date?.getFullYear()}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]
