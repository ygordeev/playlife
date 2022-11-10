import { TaskStatus } from '@/types'

export interface Task {
  id: number,
  status: TaskStatus,
  name: string,
  learningPathId: number,
  description?: string,
  dueDate?: string,
  imageUrl?: string,
}