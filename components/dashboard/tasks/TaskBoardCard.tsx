import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
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
      <Stack direction="row" spacing={1}>
        <div>
          <Typography>{task.name}</Typography>
          <Typography
            color="grey.400"
            variant="subtitle2"
            mt={1}
          >
            {task.description}
          </Typography>
        </div>

        {task.imageUrl && (
          <Image
            src={task.imageUrl}
            alt="Task Image"
            width={100}
            height={100}
          />
        )}
      </Stack>
    </Box>
  )
}

export default DashboardTaskCard