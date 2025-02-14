import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { material_codes } from '../data/data'
import { DataTableFacetedFilter } from './data-table-faceted-filter'
import { DataTableViewOptions } from './data-table-view-options'
import { useEquipamento } from '@/context/equipamento-context'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const {salasList} = useEquipamento()

  const salas_options = salasList.map((sala) => ({
    label: sala.nome,
    value: String(sala.nome),
    icon: undefined
  }))

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        <Input
          placeholder='Filtre pelo tombo...'
          value={(table.getColumn('tombo')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('tombo')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
        <div className='flex gap-x-2'>
          {table.getColumn('grupo_material') && (
            <DataTableFacetedFilter
              column={table.getColumn('grupo_material')}
              title='Grupo Material'
              options={material_codes}
            />
          )}

          {(table.getColumn('localizacao') && false) && (
            <DataTableFacetedFilter
              column={table.getColumn('localizacao')}
              title='Localização'
              options={salas_options}
            />
          )}
        </div>
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Resete
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
