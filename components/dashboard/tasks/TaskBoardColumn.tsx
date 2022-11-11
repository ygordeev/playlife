import Stack from '@mui/material/Stack'
import { Task } from '@/types'
import TaskBoardCard from './TaskBoardCard'

const columnStyle = {
  width: 400,
  height: 400,
  backgroundColor: '#1E1F25',
  border: 1,
  borderColor: 'grey.800',
  borderRadius: 2,
  p: 1,
}

const DashboardTasksColumn = ({ tasks }: { tasks: Task[] }) => {
  return (
    <Stack
      component="section"
      spacing={1}
      sx={columnStyle}
    >
      {tasks.map(task => (
        <TaskBoardCard key={task.id} task={task} />
      ))}
    </Stack>
  )
}

export default DashboardTasksColumn