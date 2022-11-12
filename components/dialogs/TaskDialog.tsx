import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Task } from '@/types'

interface TaskDialogProps {
  onClose: DialogProps['onClose'],
  task?: Task,
}

const TaskDialog = ({ task, onClose }: TaskDialogProps) => {
  const isDialogOpen = Boolean(task)

  return (
    <Dialog
      open={isDialogOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      {task && (
        <DialogTitle>{task.name}</DialogTitle>
      )}
    </Dialog>
  )
}

export default TaskDialog