import { TaskStatus } from '@/types'

export const taskBoardColumns = [
  {
    id: 1,
    name: 'Backlog',
    status: TaskStatus.Backlog,
    color: 'grey.500',
  },
  {
    id: 2,
    name: 'In Progress',
    status: TaskStatus.InProgress,
    color: 'primary.main',
  },
  {
    id: 3,
    name: 'Blocked',
    status: TaskStatus.Blocked,
    color: 'warning.light',
  },
  {
    id: 4,
    name: 'Completed',
    status: TaskStatus.Completed,
    color: 'success.light',
  },
]
