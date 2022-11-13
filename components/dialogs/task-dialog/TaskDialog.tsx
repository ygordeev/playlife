import Dialog from '@mui/material/Dialog';
import { TaskDialogProps } from '@/types'
import TaskDialogContent from './TaskDialogContent'

const TaskDialog = ({ task, onClose }: TaskDialogProps) => {
  const isDialogOpen = Boolean(task)

  return (
    <Dialog
      open={isDialogOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <TaskDialogContent task={task} onClose={onClose} />
    </Dialog>
  )
}

export default TaskDialog