import { useState } from 'react'
import Button from '@mui/material/Button'
import { ProfileButton } from '@/components/controls'
import { HorizontalCenteredStack, SiteLogo } from '@/components/layout'
import { TaskDialog } from '@/components/dialogs'
import HeaderSectionNavigation from './HeaderSectionNavigation'

const HeaderSection = () => {
  const [isNewTaskDialogOpen, setIsNewTaskDialogOpen] = useState(false)

  return (
    <>
      <HorizontalCenteredStack
        component="header"
        justifyContent="space-between"
      >
        <HorizontalCenteredStack spacing={6}>
          <SiteLogo fontSize="1.5rem" />
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
        <TaskDialog onClose={() => setIsNewTaskDialogOpen(false)} />
      )}
    </>
  )
}

export default HeaderSection;
