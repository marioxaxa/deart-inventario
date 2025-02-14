import {
  IconChecklist,
  IconHomeMove,
  IconUsers,
} from '@tabler/icons-react'
import {  Command,  } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Inventário Deart',
      logo: Command,
      plan: 'UFRN',
    },
  ],
  navGroups: [
    {
      title: '',
      items: [
        {
          title: 'Inventario',
          url: '/equipamentos',
          icon: IconChecklist,
        },
        {
          title: 'Movimentações',
          url: '/apps',
          icon: IconHomeMove,
        },
        /** 
        {
          title: 'Usuarios',
          url: '/users',
          icon: IconUsers,
        },*/
      ],
    },
  ],
}
