import { ReactNode } from 'react'
import Stack from '@mui/material/Stack';
import { HeaderSection } from '@/components/header';

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
      <HeaderSection />
      {children}
    </Stack>
  )
}

export default PrimaryLayout
