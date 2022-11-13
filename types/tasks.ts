import { MouseEventHandler } from 'react'
import { TaskStatus, Complexity } from '@/types'

export interface Task {
  id: number,
  status: TaskStatus,
  name: string,
  learningPathId: number,
  description: string,
  complexity: Complexity,
  dueDate?: string,
  imageUrl?: string,
}

export interface TaskColumn {
  id: number,
  name: string,
  status: TaskStatus,
  color: string,
}

export interface TaskDialogProps {
  onClose: MouseEventHandler,
  task?: Task,
}