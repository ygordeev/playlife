import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import groupBy from 'lodash/groupBy';
import { tasks } from '@/constants'
import { Task } from '@/types'
import { RootState } from './index'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasks,
  reducers: {
    createTask(state, task: PayloadAction<Task>) {
      console.log('Creating task in Redux', task.payload)
    }
  }
})

export const selectTasksByStatus = createSelector(
  (state: RootState) => state.tasks,
  tasks => groupBy(tasks, 'status'),
)

export const tasksActions = tasksSlice.actions

export default tasksSlice.reducer
