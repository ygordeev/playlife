import groupBy from 'lodash/groupBy';
import {
  createSlice,
  createSelector,
  createAsyncThunk,
  PayloadAction
} from '@reduxjs/toolkit'
import { fakeAxios } from '@/database'
import { taskBoardColumns } from '@/constants'
import { NewTask, Task } from '@/types'
import { RootState } from './index'

export const taskThunks = {
  fetchTasks: createAsyncThunk(
    'tasks/fetchTasks',
    async () => await fakeAxios.get('/tasks') as Task[]
  )
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [] as Task[],
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
    updateTaskColumn(state, action: PayloadAction<{
      taskId: number,
      columnId: number,
    }>) {
      const { taskId, columnId } = action.payload
      const taskIndex = state.taskList.findIndex(t => t.id === taskId)
      const column = taskBoardColumns.find(c => c.id === columnId)

      if (taskIndex < 0) throw new Error('Failed to move non-existing task')
      if (!column) throw new Error('Failed to move a task to non-existing column')
      state.taskList[taskIndex].status = column.status
    },
  },
  extraReducers: builder => {
    builder.addCase(taskThunks.fetchTasks.fulfilled, (state, action) => {
      state.taskList = action.payload
    })
  }
})

export const selectTasksByStatus = createSelector(
  (state: RootState) => state.tasks.taskList,
  tasks => groupBy(tasks, 'status'),
)

export const tasksActions = tasksSlice.actions

export default tasksSlice.reducer
