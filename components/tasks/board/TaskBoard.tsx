import { useState, useMemo } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import groupBy from 'lodash/groupBy';
import Stack, { StackProps } from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { TaskDialog } from '@/components/dialogs';
import { Task } from '@/types';
import TaskBoardColumn from './TaskBoardColumn'

// To-do: Tasks should be extracted from the store
import { taskBoardColumns, tasks } from '@/constants'

const TaskBoard = (stackProps: StackProps) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const tasksByStatus = useMemo(() => groupBy(tasks, 'status'), [])

  const onDragEnd = () => console.log('dragged')

  const updateTask = () => console.log('Updating task')

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