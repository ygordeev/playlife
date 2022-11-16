import { MouseEventHandler } from 'react'
import { TaskStatus, Complexity } from '@/types'

export interface Task {
  id: number,
  status: TaskStatus,
  name: string,
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

export interface Achievement {
  id: number,
  backgroundColor: string,
  borderColor: string,
  ribbonColor: string,
  description: string,
  emoji: string,
  dateAchieved: string,
}