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
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const tasksByStatus = useMemo(() => groupBy(tasks, 'status'), [])

  const onDragEnd = () => console.log('dragged')

  const updateTask = () => console.log('Updating task')

  return (
    <>
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
    </>
  )
}

export default TaskBoard