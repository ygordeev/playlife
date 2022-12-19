import { delayApiRequest } from '@/utils'
import { EndpointPaths } from '@/types'
import { endpointsByHttpMethod } from './endpoints'
import { HttpMethod } from './types'

/**
 * REASONS FOR USING INDEXED DB
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

const requestHandler = async (method: HttpMethod, path: EndpointPaths, body?: any) => {
  const handlersByEndpoint = endpointsByHttpMethod[method]
  if (!handlersByEndpoint) throw new Error('HTTP Method Not Supported')

  const handler = handlersByEndpoint[path]
  if (!handler) throw new Error('Endpoint Not Found')

  await delayApiRequest()
  return await handler(body)
}

export const fakeAxios = {
  get: async (path: EndpointPaths, params?: any) => await requestHandler(HttpMethod.GET, path, params),
  post: async (path: EndpointPaths, body?: any) => await requestHandler(HttpMethod.POST, path, body),
  put: async (path: EndpointPaths, body?: any) => await requestHandler(HttpMethod.PUT, path, body),
  delete: async (path: EndpointPaths, body?: any) => await requestHandler(HttpMethod.DELETE, path, body),
}
