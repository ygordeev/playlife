import { useState, MouseEventHandler } from 'react'
import { useForm } from 'react-hook-form';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DialogHeader } from '@/components/layout'
import { Task } from '@/types'

interface TaskDialogFormProps {
  task: Task,
  onClose: MouseEventHandler,
}

const TaskDialogForm = ({ task, onClose }: TaskDialogFormProps) => {
  const [taskName, setTaskName] = useState(task.name)
  const [description, setDescription] = useState(task.description)

  const { handleSubmit } = useForm()

  const onSubmit = () => {
    console.log('submitting')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogContent>
        <DialogHeader
          title="Edit Task"
          onClose={onClose}
        />

        <Stack spacing={3} mt={3}>
          <TextField
            value={taskName}
            label="Task Name"
            fullWidth
            onChange={e => setTaskName(e.target.value)}
          />

          <TextField
            value={description}
            label="Task Description"
            multiline
            fullWidth
            onChange={e => setDescription(e.target.value)}
          />
        </Stack>
      </DialogContent>
    </form>
  )
}

export default TaskDialogForm