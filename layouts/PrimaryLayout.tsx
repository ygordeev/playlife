import { ReactNode } from 'react'
import Stack from '@mui/material/Stack';
import { DashboardHeader } from '@/components/dashboard';

const PrimaryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bgcolor="grey.extradark"
      height="100vh"
      overflow="hidden"
      spacing={5}
      px={5}
      py={2}
    >
      <DashboardHeader />
      {children}
    </Stack>
  )
}

export default PrimaryLayout
