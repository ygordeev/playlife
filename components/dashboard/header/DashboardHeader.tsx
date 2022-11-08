import Button from '@mui/material/Button';
import { SearchInput } from '@/components/inputs';
import { ProfileButton } from '@/components/controls';
import { HorizontalCenteredStack } from '@/components/layout';
import DashboardHeaderNavigation from './DashboardHeaderNavigation';

const DashboardHeader = () => {
  return (
    <HorizontalCenteredStack
      component="header"
      justifyContent="space-between"
      color="common.white"
      px={5}
      py={2.5}
    >
      <HorizontalCenteredStack spacing={6}>
        <DashboardHeaderNavigation />
        <SearchInput />
      </HorizontalCenteredStack>

      <HorizontalCenteredStack spacing={6}>
        <Button variant="contained">
          + Add Task
        </Button>
        <ProfileButton />
      </HorizontalCenteredStack>
    </HorizontalCenteredStack>
  )
}

export default DashboardHeader;
