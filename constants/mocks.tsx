import { Complexity, TaskStatus, Task, Achievement } from '@/types'

export const user = {
  firstName: 'Yan',
  lastName: 'Gordeev'
}

export const nextGoal = {
  name: 'Finish reading "Japanese from Zero" (Book 1)',
  complexity: Complexity.Medium,
  finishedTasks: 18,
  plannedTasks: 25,
  dueDate: '2023-06-19',
}

export const achievements: Achievement[] = [
  {
    id: 1,
    backgroundColor: '#0d2038',
    borderColor: '#fffff5',
    ribbonColor: '#d34e32',
    description: 'Traveled to Paris and saw the Eiffel Tower with my own eyes',
    emoji: '🛩️',
    dateAchieved: '2022-11-16',
  },
  {
    id: 2,
    backgroundColor: '#d2bb21',
    borderColor: '#fffff5',
    ribbonColor: '#8331C2',
    description: 'Passed N5 Japanese exam',
    emoji: '🇯🇵',
    dateAchieved: '2022-11-16',
  },
  {
    id: 3,
    backgroundColor: '#33ae57',
    borderColor: '#d34e32',
    ribbonColor: '#ddcbeb',
    description: 'Woke up at 8 AM three weeks in a row',
    emoji: '⏰',
    dateAchieved: '2022-11-16',
  },
]

export const tasks: Task[] = [
  {
    id: 1,
    status: TaskStatus.Backlog,
    name: 'Read chapter 1 of "Japanese From Zero"',
    description: 'Chapter 1 contains information on the basic Japanese greetings and is an excellent starting point',
    dueDate: '2023-01-12',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=512&q=80',
    complexity: Complexity.Easy,
  },
]
