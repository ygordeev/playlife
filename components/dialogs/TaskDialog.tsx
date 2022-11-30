import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import LoadingButton from '@mui/lab/LoadingButton'
import { tasksThunks } from '@/store/tasks'
import { TextField, Dropdown, DatePicker, ImagePicker } from '@/components/inputs'
import { taskComplexityOptions, taskStatusOptions, defaultTask } from '@/constants'
import { useDispatch } from '@/hooks'
import { NewTask } from '@/types'

interface TaskDialogProps {
  task?: NewTask,
  onClose: () => void,
}

const TaskDialog = ({ task = defaultTask, onClose }: TaskDialogProps) => {
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors } } = useForm<NewTask>({
    defaultValues: task
  })

  const [isUpdatingTask, setIsUpdatingTask] = useState(false)

  const dialogTitle = task.id ? 'Edit task' : 'Create Task'
  const updateButtonText = task.id ? 'Update Task' : 'Create Task'

  const onSubmit = async (task: NewTask) => {
    const thunk = task.id ? tasksThunks.updateTask : tasksThunks.createTask
    const successMessage = task.id
      ? 'Task was successfully updated'
      : 'Task was successfully created'

    try {
      setIsUpdatingTask(true)
      await dispatch(thunk(task))
      onClose()
      toast.success(successMessage)
    } catch (e: unknown) {
      const error = e as Error
      toast.error(error.message)
    } finally {
      setIsUpdatingTask(false)
    }
  }

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
        <LoadingButton loading={isUpdatingTask} onClick={handleSubmit(onSubmit)}>
          {updateButtonText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}

export default TaskDialog