import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { toast } from 'react-toastify'
import Stack, { StackProps } from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { tasksActions } from '@/store/tasks'
import { TaskDialog } from '@/components/dialogs'
import { selectTasksByStatus } from '@/store/tasks'
import { taskBoardColumns } from '@/constants'
import { Task } from '@/types'
import TaskBoardColumn from './TaskBoardColumn'

const TaskBoard = (stackProps: StackProps) => {
  const dispatch = useDispatch()
  const tasksByStatus = useSelector(selectTasksByStatus)

  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  const onDragEnd = () => console.log('Dragging finished')

  const updateTask = (task: Task) => {
    dispatch(tasksActions.updateTask(task))
    setSelectedTask(null)
    toast.success('Task was successfully updated')
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