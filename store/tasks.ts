import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fakeAxios } from '@/database'
import { getNewTaskPosition } from '@/utils'
import { NewTask, Task, TaskStatus, EndpointPaths } from '@/types'
import { RootState } from './index'
import { statisticsThunks } from './statistics'

interface TasksState {
  taskList: Task[],
  tasksReceived: boolean,
}

interface MoveTaskThunkPayload {
  taskId: number,
  targetPosition: number,
  status: TaskStatus,
  siblings: Task[],
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
    async (task: NewTask, thunkAPI) => {
      const updatedTasks = await fakeAxios.put(EndpointPaths.Task, task) as Task[]
      thunkAPI.dispatch(statisticsThunks.getWeeklyCompletedTasks())
      return updatedTasks
    }
  ),
  moveTask: createAsyncThunk(
    'tasks/moveTask',
    async ({ taskId, targetPosition, status, siblings }: MoveTaskThunkPayload, thunkAPI) => {
      const state = thunkAPI.getState() as RootState
      const taskIndex = state.tasks.taskList.findIndex(t => t.id === taskId)
      
      if (taskIndex < 0) throw new Error('Failed to move non-existing task')

      const task = {
        ...state.tasks.taskList[taskIndex],
        position: getNewTaskPosition(targetPosition, siblings),
        status
      };
      
      (async () => {
        // No need to wait for API when dragging tasks between columns
        await fakeAxios.put(EndpointPaths.Task, task)
        thunkAPI.dispatch(statisticsThunks.getWeeklyCompletedTasks())
      })()
      return { task, taskIndex }
    }
  )
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
    tasksReceived: false,
  } as TasksState,
  reducers: {},
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
    builder.addCase(tasksThunks.moveTask.fulfilled, (state, action) => {
      const { task, taskIndex } = action.payload
      state.taskList[taskIndex] = task
    })
  }
})

export const tasksSelectors = {
  tasksList: (state: RootState) => state.tasks.taskList,
  tasksReceived: (state: RootState) => state.tasks.tasksReceived,
}

export const tasksActions = tasksSlice.actions

export default tasksSlice.reducer
