import { delayApiRequest } from '@/utils'
import { Database } from './database'
import { HttpMethod } from './types'

/**
 * NOTE FOR DEVELOPERS: REASONS FOR USING INDEXED DB
 * 
 * Currently Playlife project only has frontend part and no backend. I'm still
 * going to integrate the website with the actual Node.js backend but it 
 * requires time. As a temporary workaround I decided to use IndexedDB to
 * store data and created a fake Axios that acts as a proxy between FE and
 * IndexedDB. I could have used IndexedDB directly from components but since
 * I'm going to use the real backend quite soon, there was no point in
 * avoiding Redux. And I still needed a centralized storage.
 * 
 * Also I added artificial lag to all "requests" in order to display spinners
 * and make it look like the actual API request.
 * 
 * Yan Gordeev, 11/28/2022
 */

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

  await delayApiRequest()
  return await handler()
}

export const fakeAxios = {
  get: async (path: string) => await requestHandler(HttpMethod.GET, path),
  post: async (path: string) => await requestHandler(HttpMethod.POST, path),
  put: async (path: string) => await requestHandler(HttpMethod.PUT, path),
  delete: async (path: string) => await requestHandler(HttpMethod.DELETE, path),
}
