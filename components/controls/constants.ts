import { AchievementColorOptions } from '@/types'

export const achievementColorPickerOptions: Array<{
  name: keyof AchievementColorOptions,
  label: string,
}> = [
  {
    name: 'backgroundColor',
    label: 'Background',
  },
  {
    name: 'borderColor',
    label: 'Border',
  },
  {
    name: 'ribbonColor',
    label: 'Ribbon',
  },
]