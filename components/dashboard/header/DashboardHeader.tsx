import { useState } from 'react'
import Button from '@mui/material/Button';
import { StackProps } from '@mui/material/Stack';
import { SearchInput } from '@/components/inputs';
import { ProfileButton } from '@/components/controls';
import { HorizontalCenteredStack } from '@/components/layout';
import { TaskDialog } from '@/components/dialogs';
import DashboardHeaderNavigation from './DashboardHeaderNavigation';

const DashboardHeader = (props: StackProps) => {
  const [isNewTaskDialogOpen, setIsNewTaskDialogOpen] = useState(false)

  const handleCreateTask = () => console.log('Creating new task')

  return (
    <>
      <HorizontalCenteredStack
        component="header"
        justifyContent="space-between"
        {...props}
      >
        <HorizontalCenteredStack spacing={6}>
          <DashboardHeaderNavigation />
          <SearchInput />
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

export default DashboardHeader;
