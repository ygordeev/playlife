import { createSlice } from '@reduxjs/toolkit'
import { achievements } from '@/constants'
import { RootState } from './index'

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState: {
    achievementList: achievements,
  },
  reducers: {
  }
})

export const selectAchievements = (state: RootState) => state.achievements.achievementList

export const tasksActions = achievementsSlice.actions

export default achievementsSlice.reducer
