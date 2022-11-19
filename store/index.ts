import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasks'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
