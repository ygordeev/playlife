import { useState, MouseEventHandler } from 'react'
import { useForm } from 'react-hook-form'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import { Dropdown, DatePicker, ImagePicker } from '@/components/inputs'
import { taskComplexityOptions, taskStatusOptions } from '@/constants'
import { Task, Complexity, TaskStatus } from '@/types'

interface TaskDialogProps {
  task?: Task,
  onClose: MouseEventHandler,
  onSubmit: () => void,
}

const TaskDialog = ({ task, onClose, onSubmit }: TaskDialogProps) => {
  const [name, setName] = useState(task?.name || '')
  const [description, setDescription] = useState(task?.description || '')
  const [status, setStatus] = useState(task?.status || TaskStatus.Backlog)
  const [complexity, setComplexity] = useState(task?.complexity || Complexity.Easy)
  const [dueDate, setDueDate] = useState(task?.dueDate || null)
  const [imageUrl, setImageUrl] = useState('')

  const { handleSubmit } = useForm()

  const dialogTitle = task ? 'Edit task' : 'Create Task'
  const updateButtonText = task ? 'Update Task' : 'Create Task'

  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle color="primary.main">{dialogTitle}</DialogTitle>
      <DialogContent>

        <Stack spacing={3} mt={3}>
          <TextField
            value={name}
            label="Task Name"
            fullWidth
            onChange={e => setName(e.target.value)}
          />

          <TextField
            value={description}
            label="Task Description"
            multiline
            fullWidth
            onChange={e => setDescription(e.target.value)}
          />

          <Dropdown
            value={status}
            onChange={value => setStatus(value as TaskStatus)}
            label="Task Status"
            options={taskStatusOptions}
          />

          <Dropdown
            value={complexity}
            onChange={value => setComplexity(value as Complexity)}
            label="Task Complexity"
            options={taskComplexityOptions}
          />

          <DatePicker
            label="Due Date"
            value={dueDate}
            onChange={date => setDueDate(date)}
          />

          <ImagePicker
            currentImageUrl={task?.imageUrl}
            imageAlt="Task Image"
            onChange={image => setImageUrl(image?.url || '')}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSubmit(onSubmit)}>
          {updateButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TaskDialog