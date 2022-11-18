import { configureStore, createSlice } from '@reduxjs/toolkit'
import { tasks } from '@/constants'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasks,
  reducers: {}
})

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  }
})

export const tasksActions = tasksSlice.actions

export default store
