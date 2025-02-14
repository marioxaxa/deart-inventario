import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { TasksDialogs } from './components/tasks-dialogs'
import TasksProvider from './context/tasks-context'
import { useEquipamento } from '@/context/equipamento-context'
import { useAuthStore } from '@/stores/authStore'
import { useNavigate } from '@tanstack/react-router'


export default function Movimentacoes() {

  const { auth } = useAuthStore()

  const navigate = useNavigate()
  if(!auth.user) {
    navigate({ to: '/sign-in' })
  }


  const { movList } = useEquipamento()

  
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
            <h2 className='text-2xl font-bold tracking-tight'>Movimentações</h2>
            <p className='text-muted-foreground'>
              Aqui estão as movimentações que você tem acesso.
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={movList} columns={columns} />
        </div>
      </Main>

      <TasksDialogs />
    </TasksProvider>
  )
}
