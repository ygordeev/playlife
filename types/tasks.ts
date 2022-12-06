import { TaskStatus, Complexity } from '@/types'

export interface Task {
  id: number,
  status: TaskStatus,
  name: string,
  description: string,
  complexity: Complexity,
  dueDate: string | null,
  position: number,
  imageUrl?: string,
}

export type NewTask = Omit<Task, 'id' | 'position'> & { id?: number }

export interface TaskColumn {
  id: number,
  name: string,
  status: TaskStatus,
  color: string,
}

export interface Achievement {
  id: number,
  dateAchieved?: string,
  backgroundColor: string,
  borderColor: string,
  ribbonColor: string,
  description: string,
  emoji: string,
}

export type NewAchievement = Omit<Achievement, 'id'> & { id?: number }
