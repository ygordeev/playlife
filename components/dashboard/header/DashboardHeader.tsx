import Button from '@mui/material/Button';
import { StackProps } from '@mui/material/Stack';
import { SearchInput } from '@/components/inputs';
import { ProfileButton } from '@/components/controls';
import { HorizontalCenteredStack } from '@/components/layout';
import DashboardHeaderNavigation from './DashboardHeaderNavigation';

const DashboardHeader = (props: StackProps) => {
  return (
    <HorizontalCenteredStack
      component="header"
      justifyContent="space-between"
      {...props}
    >
      <HorizontalCenteredStack spacing={6}>
        <DashboardHeaderNavigation />
        <SearchInput />
        <Button variant="contained">
          + Add Task
        </Button>
      </HorizontalCenteredStack>

      <ProfileButton />
    </HorizontalCenteredStack>
  )
}

export default DashboardHeader;
