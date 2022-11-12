import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { HorizontalCenteredStack } from '@/components/layout'
import { Task, TaskColumn } from '@/types'
import TaskBoardCard from './TaskBoardCard'

interface TasksColumnProps {
  column: TaskColumn,
  tasks: Task[],
}

const columnStyle = {
  width: 400,
  backgroundColor: '#1E1F25',
  border: 1,
  borderColor: 'grey.800',
  borderRadius: 2,
  overflowY: 'auto',
  p: 1,
}

const DashboardTasksColumn = ({ column, tasks }: TasksColumnProps) => {
  return (
    <Stack
      component="section"
      spacing={1}
      sx={columnStyle}
    >
      <HorizontalCenteredStack spacing={1} pl={1}>
        <Box
          width={10}
          height={10}
          borderRadius="50%"
          bgcolor={column.color}
        />
        <Typography
          fontWeight="bold"
          color="grey.500"
          variant="subtitle2"
        >
          {column.name}
        </Typography>
      </HorizontalCenteredStack>

      <Stack spacing={1}>
        {tasks.map(task => (
          <TaskBoardCard key={task.id} task={task} />
        ))}
      </Stack>
    </Stack>
  )
}

export default DashboardTasksColumn