import { FC } from 'react';
import { SearchInput } from '@/components/inputs';
import DashboardHeaderNavigation from './DashboardHeaderNavigation';
import Stack from '@mui/material/Stack';

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
    </Stack>
  )
}

export default DashboardHeader;
