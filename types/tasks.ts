import { MouseEventHandler } from 'react'
import { TaskStatus, Complexity } from '@/types'

export interface Task {
  id: number,
  status: TaskStatus,
  name: string,
  description: string,
  complexity: Complexity,
  dueDate: string | null,
  imageUrl?: string,
}

export type NewTask = Omit<Task, 'id'>

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
  id: number | null,
  dateAchieved?: string,
  backgroundColor: string,
  borderColor: string,
  ribbonColor: string,
  description: string,
  emoji: string,
}

export type NewAchievement = Omit<Achievement, 'id'>
