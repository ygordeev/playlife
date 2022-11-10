import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Task } from '@/types'

const cardStyle = {
  backgroundColor: 'grey.800',
  borderRadius: 2,
  cursor: 'pointer',
  p: 1,
  '&:hover': {
    backgroundColor: 'grey.700',
  }
}

const DashboardTaskCard = ({ task }: { task: Task }) => {
  return (
    <Box
      component="article"
      sx={cardStyle}
    >
      <Typography>{task.name}</Typography>
      <Typography
        color="grey.400"
        variant="subtitle2"
        mt={1}
      >
        {task.description}
      </Typography>
    </Box>
  )
}

export default DashboardTaskCard