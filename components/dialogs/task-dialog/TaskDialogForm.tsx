import { useState, MouseEventHandler } from 'react'
import { useForm } from 'react-hook-form';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DialogHeader } from '@/components/layout'
import { Dropdown, DatePicker, ImagePicker } from '@/components/inputs'
import { taskComplexityOptions, taskStatusOptions } from '@/constants'
import { Task, Complexity, TaskStatus } from '@/types'

interface TaskDialogFormProps {
  task: Task,
  onClose: MouseEventHandler,
}

const TaskDialogForm = ({ task, onClose }: TaskDialogFormProps) => {
  const [name, setName] = useState(task.name)
  const [description, setDescription] = useState(task.description)
  const [status, setStatus] = useState(task.status)
  const [complexity, setComplexity] = useState(task.complexity)
  const [dueDate, setDueDate] = useState<string | null | undefined>(task.dueDate)

  const { handleSubmit } = useForm()

  const onSubmit = () => console.log('submitting')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogContent>
        <DialogHeader
          title="Edit Task"
          onClose={onClose}
        />

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
            currentImageUrl={task.imageUrl}
            imageAlt="Task Image"
          />
        </Stack>
      </DialogContent>
    </form>
  )
}

export default TaskDialogForm