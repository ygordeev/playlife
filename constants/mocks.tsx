import { Complexity, TaskStatus } from '@/types'

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

export const achievementIcons = [
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
  {
    id: 4,
    backgroundColor: '#0d2038',
    borderColor: '#33ae57',
    ribbonColor: '#325dd3',
    description: 'Took 5 surfing lessons',
    emoji: '🏄🏻‍♂️',
    dateAchieved: '2022-11-16',
  },
  {
    id: 5,
    backgroundColor: '#0d2038',
    borderColor: '#33ae57',
    ribbonColor: '#325dd3',
    description: 'Took 5 surfing lessons',
    emoji: '🏄🏻‍♂️',
    dateAchieved: '2022-11-16',
  },
  {
    id: 6,
    backgroundColor: '#0d2038',
    borderColor: '#33ae57',
    ribbonColor: '#325dd3',
    description: 'Took 5 surfing lessons',
    emoji: '🏄🏻‍♂️',
    dateAchieved: '2022-11-16',
  },
  {
    id: 7,
    backgroundColor: '#0d2038',
    borderColor: '#33ae57',
    ribbonColor: '#325dd3',
    description: 'Took 5 surfing lessons',
    emoji: '🏄🏻‍♂️',
    dateAchieved: '2022-11-16',
  },
]

export const tasks = [
  {
    id: 1,
    status: TaskStatus.Backlog,
    name: 'Read chapter 1 of "Japanese From Zero"',
    description: 'Chapter 1 contains information on the basic Japanese greetings and is an excellent starting point',
    dueDate: '2023-01-12',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=512&q=80',
    complexity: Complexity.Easy,
  },
  {
    id: 2,
    status: TaskStatus.Backlog,
    name: 'Start waking up at 7:30am everyday',
    description: 'This is the first step towards achieving the great goal of waking up at 5am',
    dueDate: '2023-04-09',
    complexity: Complexity.Hard,
  },
  {
    id: 3,
    status: TaskStatus.InProgress,
    name: 'Read chapter 1 of "Japanese From Zero"',
    description: 'Chapter 1 contains information on the basic Japanese greetings and is an excellent starting point',
    dueDate: '2023-01-12',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=512&q=80',
    complexity: Complexity.Easy,
  },
]
