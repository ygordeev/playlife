import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fakeAxios } from '@/database'
import { daysInWeek } from '@/constants'
import { getTodayISO } from '@/utils'
import {
  StatisticsTableEntry,
  RecentStatisticsRequest,
  EndpointPaths,
  StatisticsTableTypes
} from '@/types'
import { RootState } from './index'

type StatisticsState = {
  weeklyCompletedTasks: StatisticsTableEntry[]
}

export const statisticsThunks = {
  getWeeklyCompletedTasks: createAsyncThunk(
    'statistics/getWeeklyCompletedTasks',
    async () => {
      const payload: RecentStatisticsRequest = {
        type: StatisticsTableTypes.CompletedTasks,
        minDate: '2022-11-25',
        maxDate: getTodayISO(),
      }
      return await fakeAxios.get(EndpointPaths.RecentStatistics, payload) as StatisticsTableEntry[]
    }
  ),
}

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    weeklyCompletedTasks: [],
  } as StatisticsState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(statisticsThunks.getWeeklyCompletedTasks.fulfilled, (state, action) => {
      state.weeklyCompletedTasks = action.payload
    })
  }
})

export const statisticsSelectors = {
  weeklyCompletedTasks: (state: RootState) => state.statistics.weeklyCompletedTasks,
}

export const statisticsActions = statisticsSlice.actions

export default statisticsSlice.reducer
