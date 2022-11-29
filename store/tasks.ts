import groupBy from 'lodash/groupBy';
import {
  createSlice,
  createSelector,
  createAsyncThunk,
  PayloadAction
} from '@reduxjs/toolkit'
import { fakeAxios } from '@/database'
import { taskBoardColumns } from '@/constants'
import { NewTask, Task, EndpointPaths } from '@/types'
import { RootState } from './index'

type TasksInitialState = {
  taskList: Task[],
  tasksReceived: boolean,
}

export const tasksThunks = {
  fetchTasks: createAsyncThunk(
    'tasks/fetchTasks',
    async () => await fakeAxios.get(EndpointPaths.Tasks) as Task[]
  ),
  createTask: createAsyncThunk(
    'tasks/createTask',
    async (task: NewTask) => await fakeAxios.post(EndpointPaths.Task, task) as Task[]
  ),
  updateTask: createAsyncThunk(
    'tasks/updateTask',
    async (task: NewTask) => await fakeAxios.put(EndpointPaths.Task, task) as Task[]
  ),
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
    tasksReceived: false,
  } as TasksInitialState,
  reducers: {
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
    builder.addCase(tasksThunks.fetchTasks.fulfilled, (state, action) => {
      state.taskList = action.payload
      state.tasksReceived = true
    })
    builder.addCase(tasksThunks.createTask.fulfilled, (state, action) => {
      state.taskList = action.payload
    })
    builder.addCase(tasksThunks.updateTask.fulfilled, (state, action) => {
      state.taskList = action.payload
    })
  }
})

export const tasksSelectors = {
  tasksByStatus: createSelector(
    (state: RootState) => state.tasks.taskList,
    tasks => groupBy(tasks, 'status'),
  ),
  tasksReceived: (state: RootState) => state.tasks.tasksReceived,
}

export const tasksActions = tasksSlice.actions

export default tasksSlice.reducer
