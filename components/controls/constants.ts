import { AchievementColorPickerProps } from '@/types'

export const achievementColorPickerOptions: Array<{
  name: keyof AchievementColorPickerProps,
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