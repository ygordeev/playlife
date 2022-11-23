import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import groupBy from 'lodash/groupBy';
import { tasks } from '@/constants'
import { NewTask, Task } from '@/types'
import { RootState } from './index'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: tasks,
  },
  reducers: {
    createTask(state, action: PayloadAction<NewTask>) {
      const stateTaskIds = state.taskList.map(t => t.id)
      const id = Math.max(...stateTaskIds) + 1
      const task = { id, ...action.payload }
      state.taskList.push(task)
    },
    updateTask(state, action: PayloadAction<Task>) {
      const task = action.payload
      const taskIndex = state.taskList.findIndex(t => t.id === task.id)
      if (taskIndex < 0) throw new Error('Failed to update non-existing task')
      state.taskList.splice(taskIndex, 1, task)
    },
  }
})

export const selectTasksByStatus = createSelector(
  (state: RootState) => state.tasks.taskList,
  tasks => groupBy(tasks, 'status'),
)

export const tasksActions = tasksSlice.actions

export default tasksSlice.reducer
