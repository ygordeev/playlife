import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd'
import { toast } from 'react-toastify'
import groupBy from 'lodash/groupBy'
import sortBy from 'lodash/sortBy'
import Stack, { StackProps } from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { tasksSelectors, tasksThunks } from '@/store/tasks'
import { TaskDialog } from '@/components/dialogs'
import { taskBoardColumns } from '@/constants'
import { useDispatch } from '@/hooks'
import { Task, Error } from '@/types'
import TaskBoardColumn from './TaskBoardColumn'
import TaskBoardSkeleton from './TaskBoardSkeleton'

const TaskBoard = (stackProps: StackProps) => {
  const dispatch = useDispatch()
  const tasksList = useSelector(tasksSelectors.tasksList)
  const tasksReceived = useSelector(tasksSelectors.tasksReceived)

  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  const tasksByStatus = useMemo(() => {
    const groupedTasks = groupBy(tasksList, 'status')
    return Object.entries(groupedTasks).reduce((acc, [status, tasks]) => {
      acc[status] = sortBy(tasks, 'position')
      return acc
    }, {} as typeof groupedTasks)
  }, [tasksList])

  const onDragEnd: DragDropContextProps['onDragEnd'] = result => {
    try {
      if (!result.destination) return
      const { droppableId, index } = result.destination
      const column = taskBoardColumns.find(c => c.id === +droppableId)
      if (!column) throw new Error('Failed to move a task to non-existing column')

      const taskId = +result.draggableId
      const siblings = tasksByStatus[column.status] || []
      const filteredSiblings = siblings.filter(s => s.id !== taskId)

      dispatch(tasksThunks.moveTask({
        taskId,
        targetPosition: index,
        status: column.status,
        siblings: filteredSiblings,
      }))
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

      {tasksReceived ? (
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
      ) : <TaskBoardSkeleton />}

      {selectedTask && (
        <TaskDialog
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </Stack>
  )
}

export default TaskBoard
