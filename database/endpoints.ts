import { EndpointPaths } from '@/types'
import { Database } from './database'
import { HttpMethod } from './types'

const db = new Database('playlife')

type HandlersByEndpoint = Record<`${EndpointPaths}`, any>
type EndpointsByMethod = Record<`${HttpMethod}`, Partial<HandlersByEndpoint>>

export const endpointsByHttpMethod: EndpointsByMethod = {
  [HttpMethod.GET]: {
    [EndpointPaths.Tasks]: db.getTasks,
    [EndpointPaths.Achievements]: db.getAchievements,
    [EndpointPaths.RecentStatistics]: db.getRecentStatistics,
  },
  [HttpMethod.POST]: {
    [EndpointPaths.Task]: db.createTask,
    [EndpointPaths.Achievement]: db.createAchievement,
  },
  [HttpMethod.PUT]: {
    [EndpointPaths.Task]: db.updateTask,
    [EndpointPaths.Achievement]: db.updateAchievement,
  },
  [HttpMethod.DELETE]: {
    [EndpointPaths.Task]: db.deleteTask,
    [EndpointPaths.Achievement]: db.deleteAchievement,
  }
}
