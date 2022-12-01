import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fakeAxios } from '@/database'
import { StatisticsTableEntry, RecentStatisticsRequest, EndpointPaths, StatisticsTableTypes } from '@/types'
import { RootState } from './index'

type StatisticsState = {
  recentStatistics: StatisticsTableEntry[]
}

export const statisticsThunks = {
  getRecentStatistics: createAsyncThunk(
    'statistics/getRecentStatistics',
    async (payload: RecentStatisticsRequest) => {
      return await fakeAxios.get(EndpointPaths.RecentStatistics, payload) as StatisticsTableEntry[]
    }
  ),
}

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    recentStatistics: [],
  } as StatisticsState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(statisticsThunks.getRecentStatistics.fulfilled, (state, action) => {
      state.recentStatistics = action.payload
    })
  }
})

export const statisticsSelectors = {
  completedTasks: (state: RootState) => {
    return state.statistics.recentStatistics.filter(r => r.type === StatisticsTableTypes.CompletedTasks)
  }
}

export const statisticsActions = statisticsSlice.actions

export default statisticsSlice.reducer
