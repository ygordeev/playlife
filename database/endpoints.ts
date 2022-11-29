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
  },
  [HttpMethod.PUT]: {
    [EndpointPaths.Tasks]: db.getTasks,
    [EndpointPaths.Achievements]: db.getAchievements,
    [EndpointPaths.Task]: db.updateTask,
  },
} as const
