import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { achievements } from '@/constants'
import { NewAchievement } from '@/types'
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
  }
})

export const selectAchievements = (state: RootState) => state.achievements.achievementList

export const achievementsActions = achievementsSlice.actions

export default achievementsSlice.reducer
