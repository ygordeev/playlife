import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd'
import { toast } from 'react-toastify'
import Stack, { StackProps } from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { tasksSelectors, tasksActions, tasksThunks } from '@/store/tasks'
import { TaskDialog } from '@/components/dialogs'
import { taskBoardColumns } from '@/constants'
import { useDispatch } from '@/hooks'
import { Task, Error } from '@/types'
import TaskBoardColumn from './TaskBoardColumn'
import TaskBoardSkeleton from './TaskBoardSkeleton'

const TaskBoard = (stackProps: StackProps) => {
  const dispatch = useDispatch()
  const tasksByStatus = useSelector(tasksSelectors.tasksByStatus)
  const tasksReceived = useSelector(tasksSelectors.tasksReceived)

  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isLoadingTasks, setIsLoadingTasks] = useState(false)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoadingTasks(true)
        await dispatch(tasksThunks.fetchTasks())
      } catch (e: unknown) {
        const error = e as Error
        toast.error(error.message)
      } finally {
        setIsLoadingTasks(false)
      }
    }
    if (!tasksReceived) fetchTasks()
  }, [dispatch, tasksReceived])

  const onDragEnd: DragDropContextProps['onDragEnd'] = result => {
    const destinationId = result.destination?.droppableId
    if (!destinationId) return
    const payload = { taskId: +result.draggableId, columnId: +destinationId }
    dispatch(tasksActions.updateTaskColumn(payload))
  }

  const updateTask = async (task: Task) => {
    try {
      await dispatch(tasksThunks.updateTask(task))
      setSelectedTask(null)
      toast.success('Task was successfully updated')
    } catch (e: unknown) {
      const error = e as Error
      toast.error(error.message)
    }
  }

  return (
    <Stack
      overflow="hidden"
      spacing={2}
      {...stackProps}
    >
      <Typography component="h1" variant="h4">
        Your Tasks for Today
      </Typography>

      {isLoadingTasks ? <TaskBoardSkeleton /> : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Stack
            direction="row"
            justifyContent="space-between"
            overflow="hidden"
            flex={1}
            spacing={2}
            py={0.5}
          >
            {taskBoardColumns.map(column => (
              <TaskBoardColumn
                key={column.id}
                column={column}
                tasks={tasksByStatus[column.status] || []}
                onTaskSelect={setSelectedTask}
              />
            ))}
          </Stack>
        </DragDropContext>
      )}

      {selectedTask && (
        <TaskDialog
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSubmit={updateTask}
        />
      )}
    </Stack>
  )
}

export default TaskBoard