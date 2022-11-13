import { useMemo } from 'react'
import Image from 'next/image'
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { HorizontalCenteredStack } from '@/components/layout'
import { capitalize, formatDate } from '@/utils'
import { TaskDialogProps } from '@/types'

type TaskDialogContentProps = TaskDialogProps & {
  onEnableEditing: () => void,
}

const dialogIconStyle = {
  marginLeft: 1,
  color: 'grey.500',
  cursor: 'pointer',
  '&:hover': {
    color: 'primary.light',
  }
}

const TaskDialogContent = ({ task, onEnableEditing, onClose }: TaskDialogContentProps) => {
  const dueDate = useMemo(() => {
    return task?.dueDate ? formatDate(task.dueDate) : 'Not Specified'
  }, [task?.dueDate])

  if (!task) return null

  return (
    <DialogContent>
      <HorizontalCenteredStack justifyContent="space-between">
        <Typography
          color="primary.light"
          variant="h6"
          flexGrow={1}
        >
          {task.name}
        </Typography>
        <EditIcon sx={dialogIconStyle} onClick={onEnableEditing} />
        <CloseIcon sx={dialogIconStyle} onClick={onClose} />
      </HorizontalCenteredStack>

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
