import { useEffect, MouseEventHandler } from 'react'
import { useForm } from 'react-hook-form'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import { TextField, Dropdown, DatePicker, ImagePicker } from '@/components/inputs'
import { taskComplexityOptions, taskStatusOptions, errorMessages } from '@/constants'
import { Task, NewTask, Complexity, TaskStatus } from '@/types'

interface TaskDialogProps {
  task?: Task,
  onClose: MouseEventHandler,
  onSubmit: (task: NewTask) => void,
}

const TaskDialog = ({ task, onClose, onSubmit }: TaskDialogProps) => {
  const {
    control,
    formState: { errors },
    setValue,
    getValues,
    register,
    handleSubmit,
  } = useForm<NewTask>({
    defaultValues: {
      name: task?.name || '',
      description: task?.description || '',
      status: task?.status || TaskStatus.Backlog,
      complexity: task?.complexity || Complexity.Easy,
      dueDate: task?.dueDate || null,
      imageUrl: task?.imageUrl || '',
    }
  })
  
  useEffect(() => {
    register('imageUrl')
  }, [register])

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
            imageAlt="Task Image"
            imageUrl={getValues('imageUrl')}
            errorMessage={errors.imageUrl?.message}
            onChange={value => setValue('imageUrl', value)}
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