import { MouseEventHandler } from 'react'
import Image from 'next/image'
import { Draggable, DraggableProvided } from 'react-beautiful-dnd'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { HorizontalCenteredStack, ComplexityIndicator } from '@/components/layout'
import { getLineClampStyle, formatDate } from '@/utils'
import { Task } from '@/types'

interface TaskBoardCardProps {
  task: Task,
  index: number,
  onClick: MouseEventHandler,
}

const cardStyle = {
  backgroundColor: '#292d32',
  borderRadius: 2,
  cursor: 'pointer',
  p: 1,
  '&:hover': {
    backgroundColor: '#33383e',
  }
}

const DashboardTaskCard = ({ task, index, onClick }: TaskBoardCardProps) => {
  return (
    <Draggable
      key={task.id}
      draggableId={task.id.toString()}
      index={index}
    >
      {(provided: DraggableProvided) => (
        <Box
          component="article"
          sx={cardStyle}
          ref={provided.innerRef}
          onClick={onClick}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Stack direction="row" spacing={1}>
            <Box flexGrow={1}>
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
            </Box>

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

          <HorizontalCenteredStack justifyContent="space-between" mt={1}>
            <ComplexityIndicator complexity={task.complexity} />

            {task.dueDate && (
              <Typography variant="subtitle2" color="grey.500">
                {formatDate(task.dueDate)}
              </Typography>
            )}
          </HorizontalCenteredStack>
        </Box>
      )}
    </Draggable>
  )
}

export default DashboardTaskCard