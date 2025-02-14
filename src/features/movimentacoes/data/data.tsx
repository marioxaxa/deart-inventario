import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUp,
  IconCircle,
  IconCircleCheck,
  IconCircleX,
  IconExclamationCircle,
  IconStopwatch,
} from '@tabler/icons-react'

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
]

export const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
    icon: IconExclamationCircle,
  },
  {
    value: 'todo',
    label: 'Todo',
    icon: IconCircle,
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: IconStopwatch,
  },
  {
    value: 'done',
    label: 'Done',
    icon: IconCircleCheck,
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: IconCircleX,
  },
]

export const material_codes = [
  {
    value: '5230',
    label: '5230 - Maquinas E Eq. Energeticos',
  },
  {
    value: '5235',
    label: '5235 - Eq. De Processamentos De Dados',
  },
  {
    value: '5206',
    label: '5206 - Aparelhos E Eq. De Comunicacao',
  },
  {
    value: '5233',
    label: '5233 - Eq. Para Audio Video E Foto',
  },
  {
    value: '5242',
    label: '5242 - Mobiliario Em Geral',
  },
  {
    value: '5212',
    label: '5212 - Aparelhos Utensílios Domésticos E Ar Condicionado',
  }
]


export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: IconArrowDown,
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: IconArrowRight,
  },
  {
    label: 'High',
    value: 'high',
    icon: IconArrowUp,
  },
]
