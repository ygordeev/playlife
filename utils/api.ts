import { apiRequestLag } from '@/constants'

export const delay = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(null), timeout)
  })
}

export const delayApiRequest = () => delay(apiRequestLag)
