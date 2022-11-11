import { DragDropContext } from 'react-beautiful-dnd'
import Stack from '@mui/material/Stack'
import TaskBoardColumn from './TaskBoardColumn'

// To-do: Tasks should be extracted from the store
import { taskBoardColumns, tasks } from '@/constants'

const TaskBoard = () => {
  const onDragEnd = () => console.log('dragged')

  const todoTasks = tasks.filter(t => t.status === 'Backlog')

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Stack
        direction="row"
        justifyContent="space-between"
        flex={1}
        spacing={2}
      >
        {taskBoardColumns.map(column => (
          <TaskBoardColumn
            key={column.id}
            column={column}
            tasks={todoTasks}
          />
        ))}
      </Stack>
    </DragDropContext>
  )
}

export default TaskBoard