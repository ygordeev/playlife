import { Complexity, TaskStatus, Task, Achievement } from '@/types'

export const user = {
  id: 1,
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
    dueDate: '2020-12-12',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=512&q=80',
    complexity: Complexity.Easy,
  },
  {
    id: 2,
    status: TaskStatus.InProgress,
    name: 'Wake up at 7pm',
    description: 'The earlier you get up, the more you will be able to do',
    dueDate: '2023-01-12',
    complexity: Complexity.Medium,
  },
  {
    id: 3,
    status: TaskStatus.InProgress,
    name: 'Watch Westworld (season 4)',
    description: 'Although the TV series has been cancelled, I hope it is still worth the watch',
    dueDate: '2024-01-25',
    imageUrl: 'https://images.unsplash.com/photo-1612281423255-b152cacea3e1?auto=format&fit=crop&q=80&w=400',
    complexity: Complexity.Easy,
  },
  {
    id: 4,
    status: TaskStatus.Blocked,
    name: 'Relocate to the United States',
    description: 'This is my primary goal at the moment. Atlanta? SF? Who knows...',
    dueDate: '2021-05-12',
    complexity: Complexity.Hard,
  },
  {
    id: 5,
    status: TaskStatus.Completed,
    name: 'Finish reading The Stand by Stephen King',
    description: 'I have been reading this book for more than 6 months already. It is time to finish it',
    dueDate: '2024-01-17',
    imageUrl: 'https://images.unsplash.com/photo-1414124488080-0188dcbb8834?auto=format&fit=crop&w=512&q=80',
    complexity: Complexity.Medium,
  },
]
