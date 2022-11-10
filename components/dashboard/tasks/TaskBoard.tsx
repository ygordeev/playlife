import { DragDropContext } from 'react-beautiful-dnd'
import Stack from '@mui/material/Stack'
import TaskBoardColumn from './TaskBoardColumn'

// To-do: Tasks should be extracted from the store
import { tasks } from '@/constants'

const TaskBoard = () => {
  const onDragEnd = () => console.log('dragged')

  const todoTasks = tasks.filter(t => t.status === 'ToDo')

  return (
    <Stack direction="row">
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskBoardColumn tasks={todoTasks} />
      </DragDropContext>
    </Stack>
  )
}

export default TaskBoard