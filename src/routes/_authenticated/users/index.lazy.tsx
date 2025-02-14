import { createLazyFileRoute } from '@tanstack/react-router'
import Users from '@/features/users'
import Movimentacoes from '@/features/movimentacoes'

export const Route = createLazyFileRoute('/_authenticated/users/')({
  component: Movimentacoes,
})
