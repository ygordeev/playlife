import { Task, NewTask, TaskStatus, Complexity } from '@/types'

export const defaultTask: NewTask = {
  name: '',
  description: '',
  status: TaskStatus.Backlog,
  complexity: Complexity.Easy,
  dueDate: null,
  imageUrl: '',
}

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

export const taskStatusOptions = taskBoardColumns.map(column => ({
  label: column.name,
  value: column.status,
}))

export const taskComplexityOptions = [
  {
    label: 'Easy',
    value: Complexity.Easy,
  },
  {
    label: 'Medium',
    value: Complexity.Medium,
  },
  {
    label: 'Hard',
    value: Complexity.Hard,
  },
]
