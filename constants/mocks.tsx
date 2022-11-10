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
    description: 'Traveled to Paris and saw the Eiffel Tower with my own eyes',
    emoji: '🛩️',
  },
  {
    id: 2,
    backgroundColor: '#d2bb21',
    borderColor: '#fffff5',
    ribbonColor: '#8331C2',
    description: 'Passed N5 Japanese exam',
    emoji: '🇯🇵',
  },
  {
    id: 3,
    backgroundColor: '#33ae57',
    borderColor: '#d34e32',
    ribbonColor: '#ddcbeb',
    description: 'Woke up at 8 AM three weeks in a row',
    emoji: '⏰',
  },
  {
    id: 4,
    backgroundColor: '#0d2038',
    borderColor: '#33ae57',
    ribbonColor: '#325dd3',
    description: 'Took 5 surfing lessons',
    emoji: '🏄🏻‍♂️',
  },
]
