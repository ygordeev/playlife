import { useMemo, MouseEventHandler } from 'react'
import Image from 'next/image'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { HorizontalCenteredStack } from '@/components/layout'
import { capitalize, formatDate } from '@/utils'
import { Task } from '@/types'

interface TaskDialogProps {
  onClose: MouseEventHandler,
  task?: Task,
}

const dialogIconStyle = {
  marginLeft: 1,
  color: 'grey.500',
  cursor: 'pointer',
  '&:hover': {
    color: 'primary.light',
  }
}

const TaskDialog = ({ task, onClose }: TaskDialogProps) => {
  const isDialogOpen = Boolean(task)

  const dueDate = useMemo(() => {
    return task?.dueDate ? formatDate(task.dueDate) : 'Not Specified'
  }, [task?.dueDate])

  return (
    <Dialog
      open={isDialogOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      {task && (
        <DialogContent>
          <HorizontalCenteredStack justifyContent="space-between">
            <Typography
              color="primary.light"
              variant="h6"
              flexGrow={1}
            >
              {task.name}
            </Typography>
            <EditIcon sx={dialogIconStyle} />
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
      )}
    </Dialog>
  )
}

export default TaskDialog