import { Database } from './database'
import { HttpMethod } from './types'

const db = new Database('playlife')

const getEndpoints: Record<string, any> = {
  '/tasks': db.getTasks,
  '/achievements': db.getAchievements,
}

const endpointsByHttpMethod = {
  [HttpMethod.GET]: getEndpoints,
  [HttpMethod.POST]: null,
  [HttpMethod.PUT]: null,
  [HttpMethod.DELETE]: null,
}

const requestHandler = async (method: HttpMethod, path: string) => {
  const endpoints = endpointsByHttpMethod[method]
  if (!endpoints) throw new Error('HTTP Method Not Supported')

  const handler = endpoints[path]
  if (!handler) throw new Error('Endpoint Not Found')

  return await handler()
}

export const fakeAxios = {
  get: async (path: string) => await requestHandler(HttpMethod.GET, path)
}
