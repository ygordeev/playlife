import { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '@mui/material/Button'
import { StackProps } from '@mui/material/Stack'
import { tasksActions } from '@/store/tasks'
import { ProfileButton } from '@/components/controls'
import { HorizontalCenteredStack } from '@/components/layout'
import { TaskDialog } from '@/components/dialogs'
import { useDispatch } from '@/hooks'
import { NewTask } from '@/types'
import HeaderSectionNavigation from './HeaderSectionNavigation'

const HeaderSection = (props: StackProps) => {
  const dispatch = useDispatch()
  const [isNewTaskDialogOpen, setIsNewTaskDialogOpen] = useState(false)

  const handleCreateTask = (task: NewTask) => {
    dispatch(tasksActions.createTask(task))
    setIsNewTaskDialogOpen(false)
    toast.success('New task was successfully created')
  }

  return (
    <>
      <HorizontalCenteredStack
        component="header"
        justifyContent="space-between"
        {...props}
      >
        <HorizontalCenteredStack spacing={6}>
          <HeaderSectionNavigation />
          <Button
            variant="contained"
            onClick={() => setIsNewTaskDialogOpen(true)}
          >
            + Add Task
          </Button>
        </HorizontalCenteredStack>

        <ProfileButton />
      </HorizontalCenteredStack>

      {isNewTaskDialogOpen && (
        <TaskDialog
          onClose={() => setIsNewTaskDialogOpen(false)}
          onSubmit={handleCreateTask}
        />
      )}
    </>
  )
}

export default HeaderSection;
