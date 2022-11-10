import { Complexity } from '@/types'

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
    emoji: '🛩️',
  },
  {
    id: 2,
    backgroundColor: '#d2bb21',
    borderColor: '#fffff5',
    ribbonColor: '#8331C2',
    emoji: '🇯🇵',
  },
  {
    id: 3,
    backgroundColor: '#33ae57',
    borderColor: '#d34e32',
    ribbonColor: '#ddcbeb',
    emoji: '⏰',
  },
  {
    id: 4,
    backgroundColor: '#0d2038',
    borderColor: '#33ae57',
    ribbonColor: '#325dd3',
    emoji: '🏄🏻‍♂️',
  },
]
