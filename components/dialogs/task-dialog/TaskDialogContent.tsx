import { useMemo, MouseEventHandler } from 'react'
import Image from 'next/image'
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HorizontalCenteredStack, DialogHeader } from '@/components/layout'
import { capitalize, formatDate } from '@/utils'
import { TaskDialogProps } from '@/types'

type TaskDialogContentProps = TaskDialogProps & {
  onEnableEditing: MouseEventHandler,
}

const TaskDialogContent = ({ task, onEnableEditing, onClose }: TaskDialogContentProps) => {
  const dueDate = useMemo(() => {
    return task?.dueDate ? formatDate(task.dueDate) : 'Not Specified'
  }, [task?.dueDate])

  if (!task) return null

  return (
    <DialogContent>
      <DialogHeader
        title={task.name}
        onEnableEditing={onEnableEditing}
        onClose={onClose}
      />

      <Typography color="grey.500" mt={3}>
        Description
      </Typography>
      <Typography>{task.description}</Typography>

      <HorizontalCenteredStack justifyContent="space-between" mt={3}>
        <Box>
          <Typography color="grey.500">Learning Path</Typography>
          <Typography>Japanese</Typography>
        </Box>

        <Box>
          <Typography color="grey.500">Complexity</Typography>
          <Typography>{capitalize(task.complexity)}</Typography>
        </Box>

        <Box>
          <Typography color="grey.500">Due Date</Typography>
          <Typography>{dueDate}</Typography>
        </Box>
      </HorizontalCenteredStack>

      <Typography color="grey.500" mt={3}>
        Image
      </Typography>
      {task.imageUrl ? (
        <Image
          src={task.imageUrl}
          alt="Task Image"
          width={300}
          height={200}
          style={{ borderRadius: '10px' }}
        />
      ) : <Typography>No Image Selected</Typography>}
    </DialogContent>
  )
}

export default TaskDialogContent
