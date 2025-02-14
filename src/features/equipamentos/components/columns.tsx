import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from './data-table-column-header'
import { Item } from '../data/item'
import { useEquipamento } from '@/context/equipamento-context'
import { useTasks } from '../context/tasks-context'

export const columns: ColumnDef<Item>[] = [
  {
    id: 'select',
    header: ({ table }) => {

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { setSelectedRows } = useTasks()
      
      return(
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => {
          table.toggleAllPageRowsSelected(!!value)

          let rowsHolder = []
          if(value) {
            table.getRowModel().rows.map((row) => rowsHolder.push(row.original))
          } else {
            rowsHolder = []
          }
          setSelectedRows(rowsHolder)
        }}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    )},
    cell: ({ row }) => {
      
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { selectedRows, setSelectedRows } = useTasks()
      
      return(
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value)
          const rowsHolder = selectedRows 
          if(value) {
            rowsHolder.push(row.original)
          } else {
            rowsHolder.splice(rowsHolder.indexOf(row.original), 1)
          }
          setSelectedRows(rowsHolder)
        }}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    )},
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'tombo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Tombo' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('tombo')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'grupo_material',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Grupo Material' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('grupo_material')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'localizacao',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Localização' />
    ),
    cell: ({ row }) => {

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { salasList } = useEquipamento()

      const sala = salasList.find(sala => sala.id === row.getValue('localizacao'))

      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {sala?.nome}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]
