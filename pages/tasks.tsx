import type { NextPage } from 'next'
import { DashboardHeader } from '@/components/dashboard';
import Box from '@mui/material/Box';

const DashboardBackgroundStyle = {
  height: '100vh',
  color: 'white',
  backgroundColor: 'grey.900',
}

const TasksPage: NextPage = () => {
  return (
    <Box sx={DashboardBackgroundStyle}>
      <DashboardHeader />
    </Box>
  )
}

export default TasksPage;
