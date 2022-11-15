import { useState, useMemo } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import groupBy from 'lodash/groupBy';
import Stack from '@mui/material/Stack'
import { TaskDialog } from '@/components/dialogs';
import { Task } from '@/types';
import TaskBoardColumn from './TaskBoardColumn'

// To-do: Tasks should be extracted from the store
import { taskBoardColumns, tasks } from '@/constants'

const TaskBoard = () => {
  const [selectedTask, setSelectedTask] = useState<Task>()

  const onDragEnd = () => console.log('dragged')

  const tasksByStatus = useMemo(() => groupBy(tasks, 'status'), [])

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Stack
          direction="row"
          justifyContent="space-between"
          overflow="hidden"
          flex={1}
          spacing={2}
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

      <TaskDialog
        task={selectedTask}
        onClose={() => setSelectedTask(undefined)}
      />
    </>
  )
}

export default TaskBoard