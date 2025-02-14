import { createLazyFileRoute } from '@tanstack/react-router'
import Movimentacoes from '@/features/movimentacoes'

export const Route = createLazyFileRoute('/_authenticated/apps/')({
  component: Movimentacoes,
})
