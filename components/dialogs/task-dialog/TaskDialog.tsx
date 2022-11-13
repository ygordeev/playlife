import Dialog from '@mui/material/Dialog';
import { TaskDialogProps } from '@/types'
import TaskDialogForm from './TaskDialogForm'

const TaskDialog = ({ task, onClose }: TaskDialogProps) => {
  const isDialogOpen = Boolean(task)

  return (
    <Dialog
      open={isDialogOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      {task && <TaskDialogForm task={task} onClose={onClose} />}
    </Dialog>
  )
}

export default TaskDialog