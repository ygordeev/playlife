import Box from '@mui/material/Box'
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
    <Box
      component="section"
      sx={columnStyle}
    >
      {tasks.map(task => (
        <TaskBoardCard key={task.id} task={task} />
      ))}
    </Box>
  )
}

export default DashboardTasksColumn