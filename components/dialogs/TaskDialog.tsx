import { MouseEventHandler } from 'react'
import { useForm } from 'react-hook-form'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import { TextField, Dropdown, DatePicker, ImagePicker } from '@/components/inputs'
import { taskComplexityOptions, taskStatusOptions, defaultTask } from '@/constants'
import { Task } from '@/types'

interface TaskDialogProps {
  task?: Task,
  onClose: MouseEventHandler,
  onSubmit: (task: Task) => void,
}

const TaskDialog = ({ task = defaultTask, onClose, onSubmit }: TaskDialogProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm<Task>({
    defaultValues: task
  })

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
            name="name"
            label="Task Name"
            validators={['required']}
            control={control}
            errorMessage={errors.name?.message}
            fullWidth
          />

          <TextField
            name="description"
            label="Task Description"
            validators={['required']}
            control={control}
            errorMessage={errors.description?.message}
            multiline
            fullWidth
          />

          <Dropdown
            name="status"
            label="Task Status"
            validators={['required']}
            control={control}
            errorMessage={errors.status?.message}
            options={taskStatusOptions}
          />

          <Dropdown
            name="complexity"
            label="Task Complexity"
            validators={['required']}
            control={control}
            errorMessage={errors.complexity?.message}
            options={taskComplexityOptions}
          />

          <DatePicker
            name="dueDate"
            label="Due Date"
            validators={['required']}
            control={control}
            errorMessage={errors.dueDate?.message}
          />

          <ImagePicker
            name="imageUrl"
            imageAlt="Task Image"
            control={control}
            errorMessage={errors.imageUrl?.message}
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