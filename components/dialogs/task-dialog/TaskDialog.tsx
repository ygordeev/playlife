import { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { TaskDialogProps } from '@/types'
import TaskDialogContent from './TaskDialogContent'
import TaskDialogForm from './TaskDialogForm'

const TaskDialog = ({ task, onClose }: TaskDialogProps) => {
  const isDialogOpen = Boolean(task)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (!isDialogOpen) setIsEditing(false)
  }, [isDialogOpen])

  return (
    <Dialog
      open={isDialogOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      {isEditing && task ?
        <TaskDialogForm task={task} onClose={onClose} /> :
        <TaskDialogContent
          task={task}
          onClose={onClose}
          onEnableEditing={() => setIsEditing(true)}
        />
      }
      
    </Dialog>
  )
}

export default TaskDialog