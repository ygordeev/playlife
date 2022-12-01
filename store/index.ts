import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasks'
import achievementsReducer from './achievements'
import statisticsReducer from './statistics'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    achievements: achievementsReducer,
    statistics: statisticsReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
