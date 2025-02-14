import { createLazyFileRoute } from '@tanstack/react-router'
import Equipamentos from '@/features/equipamentos'

export const Route = createLazyFileRoute('/_authenticated/equipamentos/')({
  component: Equipamentos,
})
