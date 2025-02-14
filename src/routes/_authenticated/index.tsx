import { createFileRoute } from '@tanstack/react-router'
import Equipamentos from '@/features/equipamentos'

export const Route = createFileRoute('/_authenticated/')({
  component: Equipamentos,
})
