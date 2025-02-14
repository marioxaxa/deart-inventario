import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { TasksDialogs } from './components/tasks-dialogs'
import TasksProvider from './context/tasks-context'
import { useEquipamento } from '@/context/equipamento-context'
import { TasksPrimaryButtons } from './components/tasks-primary-buttons'
import { useAuthStore } from '@/stores/authStore'
import { useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Item } from './data/item'


export default function Equipamentos() {

  const { auth } = useAuthStore()

  const navigate = useNavigate()
  if(!auth.user) {
    navigate({ to: '/sign-in' })
  }


  const {itemsList} = useEquipamento()

  const gruposByRole = () => {
    if (auth.user?.role === 'admin') {
      return ["5230", "5235", "5206", "5233", "5242", "5212"]
    } else if (auth.user?.role === 'ti') {
      return ["5230", "5235", "5206", "5233"]
    } else if (auth.user?.role === 'supervisor') {
      return ["5242", "5212"]
    } else {
      return []
    }
  }
  
  const [filteredRoles, setFilteredRoles] = useState<Item[]>([])

  useEffect(() => {
    const filteredByRole = itemsList.filter(item => gruposByRole().includes(item.grupo_material))
    setFilteredRoles(filteredByRole)
  },[auth.user])

  
  
  return (
    <TasksProvider>
      <Header fixed>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Inventario</h2>
            <p className='text-muted-foreground'>
              Aqui está o inventário completo que você tem acesso.
            </p>
          </div>
          <TasksPrimaryButtons /> 
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={filteredRoles} columns={columns} />
        </div>
      </Main>

      <TasksDialogs />
    </TasksProvider>
  )
}
