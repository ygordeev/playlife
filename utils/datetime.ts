import { USLocale } from '@/constants'

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' }
  return new Intl.DateTimeFormat(USLocale, options).format(date)
}

export const getISODate = (date: Date | null) => {
  return date?.toISOString().substring(0, 10)
}

export const getTodayISO = () => getISODate(new Date())
