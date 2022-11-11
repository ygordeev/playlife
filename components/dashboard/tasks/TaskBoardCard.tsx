import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { HorizontalCenteredStack, ComplexityIndicator } from '@/components/layout'
import { getLineClampStyle, formatDate } from '@/utils'
import { Task } from '@/types'

const cardStyle = {
  backgroundColor: '#292d32',
  borderRadius: 2,
  cursor: 'pointer',
  p: 1,
  '&:hover': {
    backgroundColor: '#33383e',
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
          <Typography
            fontWeight="bold"
            sx={getLineClampStyle(2)}
          >
            {task.name}
          </Typography>
          <Typography
            color="grey.400"
            variant="subtitle2"
            sx={getLineClampStyle(2)}
            mt={1}
          >
            {task.description}
          </Typography>
        </div>

        {task.imageUrl && (
          <Box flexShrink={0}>
            <Image
              src={task.imageUrl}
              alt="Task Image"
              width={120}
              height={100}
              style={{ borderRadius: '10px' }}
            />
          </Box>
        )}
      </Stack>

      <HorizontalCenteredStack justifyContent="space-between">
        {task.learningPathId > 0 && (
          <Typography
            variant="subtitle2"
            color="primary.main"
            sx={{ textTransform: 'uppercase' }}
          >
            Japanese
          </Typography>
        )}

        <ComplexityIndicator complexity={task.complexity} />

        {task.dueDate && (
          <Typography variant="subtitle2" color="grey.500">
            {formatDate(task.dueDate)}
          </Typography>
        )}
      </HorizontalCenteredStack>
    </Box>
  )
}

export default DashboardTaskCard