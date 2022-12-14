import { USLocale } from '@/constants'

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' }
  return new Intl.DateTimeFormat(USLocale, options).format(date)
}

export const getISODate = (date: Date | null) => {
  return date?.toISOString().substring(0, 10)
}

export const getTodayISO = () => getISODate(new Date())!

export const subtractDays = (numOfDays: number, date = new Date()) => {
  const dateCopy = new Date(date.getTime());
  dateCopy.setDate(dateCopy.getDate() - numOfDays);
  return dateCopy;
}
