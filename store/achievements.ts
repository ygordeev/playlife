import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { achievements } from '@/constants'
import { NewAchievement, Achievement } from '@/types'
import { RootState } from './index'

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState: {
    achievementList: achievements,
  },
  reducers: {
    createAchievement(state, action: PayloadAction<NewAchievement>) {
      const stateAchievementIds = state.achievementList.map(a => a.id)
      const id = Math.max(...stateAchievementIds) + 1
      const achievement = { id, ...action.payload }
      state.achievementList.push(achievement)
    },
    updateAchievement(state, action: PayloadAction<Achievement>) {
      const achievement = action.payload
      const achievementIndex = state.achievementList.findIndex(t => t.id === achievement.id)

      if (achievementIndex < 0) throw new Error('Failed to update non-existing achievement')
      state.achievementList.splice(achievementIndex, 1, achievement)
    },
  }
})

export const selectAchievements = (state: RootState) => state.achievements.achievementList

export const achievementsActions = achievementsSlice.actions

export default achievementsSlice.reducer
