import { getTodayISO } from '@/utils'

export const getStatisticsIdentifier = (type: string) => ({
  date: getTodayISO(),
  type,
})
