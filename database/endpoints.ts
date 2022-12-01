import { EndpointPaths } from '@/types'
import { Database } from './database'
import { HttpMethod } from './types'

const db = new Database('playlife')

export const endpointsByHttpMethod = {
  // To-do: Remove redundant endpoints
  [HttpMethod.GET]: {
    [EndpointPaths.Tasks]: db.getTasks,
    [EndpointPaths.Achievements]: db.getAchievements,
    [EndpointPaths.Task]: db.updateTask,
    [EndpointPaths.Achievement]: db.createTask,
    [EndpointPaths.RecentStatistics]: db.getRecentStatistics,
  },
  [HttpMethod.POST]: {
    [EndpointPaths.Tasks]: db.getTasks,
    [EndpointPaths.Achievements]: db.getAchievements,
    [EndpointPaths.Task]: db.createTask,
    [EndpointPaths.Achievement]: db.createAchievement,
    [EndpointPaths.RecentStatistics]: db.getRecentStatistics,
  },
  [HttpMethod.PUT]: {
    [EndpointPaths.Tasks]: db.getTasks,
    [EndpointPaths.Achievements]: db.getAchievements,
    [EndpointPaths.Task]: db.updateTask,
    [EndpointPaths.Achievement]: db.updateAchievement,
    [EndpointPaths.RecentStatistics]: db.getRecentStatistics,
  },
} as const
