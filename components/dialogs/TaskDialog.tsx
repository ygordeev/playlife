import { useState, MouseEventHandler } from 'react'
import { useForm, Controller, FieldValues } from 'react-hook-form'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import { TextField, Dropdown, DatePicker, ImagePicker } from '@/components/inputs'
import { taskComplexityOptions, taskStatusOptions } from '@/constants'
import { Task, NewTask, Complexity, TaskStatus } from '@/types'

interface TaskDialogProps {
  task?: Task,
  onClose: MouseEventHandler,
  onSubmit: (task: NewTask) => void,
}

const TaskDialog = ({ task, onClose, onSubmit }: TaskDialogProps) => {
  const [imageUrl, setImageUrl] = useState('')

  const { control, formState: { errors }, handleSubmit } = useForm<NewTask>({
    defaultValues: {
      name: task?.name || '',
      description: task?.description || '',
      status: task?.status || TaskStatus.Backlog,
      complexity: task?.complexity || Complexity.Easy,
      dueDate: task?.dueDate || null,
    }
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
            errorMessage={errors.name?.message as string}
            fullWidth
          />

          <TextField
            name="description"
            label="Task Description"
            validators={['required']}
            control={control}
            errorMessage={errors.description?.message as string}
            multiline
            fullWidth
          />

          <Controller
            name="status"
            control={control}
            render={({ field }) => <Dropdown
              {...field}
              label="Task Status"
              options={taskStatusOptions}
            />}
          />

          <Controller
            name="complexity"
            control={control}
            render={({ field }) => <Dropdown
              {...field}
              label="Task Complexity"
              options={taskComplexityOptions}
            />}
          />

          <Controller
            name="dueDate"
            control={control}
            render={({ field }) => <DatePicker {...field} label="Due Date" />}
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