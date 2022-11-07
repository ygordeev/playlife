import { FC } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { SearchInput } from '@/components/inputs';
import { ProfileButton } from '@/components/controls';
import DashboardHeaderNavigation from './DashboardHeaderNavigation';

const DashboardHeader: FC = () => {
  return (
    <Stack
      component="header"
      direction="row"
      alignItems="center"
      spacing={6}
      px={5}
      py={2.5}
    >
      <DashboardHeaderNavigation />
      <SearchInput />
      <Button variant="contained">
        + Add Task
      </Button>
      <ProfileButton />
    </Stack>
  )
}

export default DashboardHeader;
