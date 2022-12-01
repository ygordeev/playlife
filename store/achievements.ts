import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fakeAxios } from '@/database'
import { NewAchievement, Achievement, EndpointPaths } from '@/types'
import { RootState } from './index'

type AchievementsState = {
  achievementList: Achievement[],
  achievementsReceived: boolean,
}

export const achievementsThunks = {
  fetchAchievements: createAsyncThunk(
    'achievements/fetchAchievements',
    async () => await fakeAxios.get(EndpointPaths.Achievements) as Achievement[]
  ),
  createAchievement: createAsyncThunk(
    'achievements/createAchievement',
    async (ach: NewAchievement) => await fakeAxios.post(EndpointPaths.Achievement, ach) as Achievement[]
  ),
  updateAchievement: createAsyncThunk(
    'achievements/updateAchievement',
    async (ach: NewAchievement) => await fakeAxios.put(EndpointPaths.Achievement, ach) as Achievement[]
  ),
}

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState: {
    achievementList: [],
    achievementsReceived: false,
  } as AchievementsState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(achievementsThunks.fetchAchievements.fulfilled, (state, action) => {
      state.achievementList = action.payload
      state.achievementsReceived = true
    })
    builder.addCase(achievementsThunks.createAchievement.fulfilled, (state, action) => {
      state.achievementList = action.payload
    })
    builder.addCase(achievementsThunks.updateAchievement.fulfilled, (state, action) => {
      state.achievementList = action.payload
    })
  }
})

export const achievementsSelectors = {
  achievements: (state: RootState) => state.achievements.achievementList,
  achievementsReceived: (state: RootState) => state.achievements.achievementsReceived,

}

export const achievementsActions = achievementsSlice.actions

export default achievementsSlice.reducer
