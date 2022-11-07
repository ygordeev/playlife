import type { NextPage } from 'next'
import Head from 'next/head'
import { DashboardHeader } from '@/components/dashboard';
import Box from '@mui/material/Box';

const dashboardBackgroundStyle = {
  height: '100vh',
  color: 'white',
  backgroundColor: 'grey.900',
}

const TasksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Tasks</title>
      </Head>

      <Box sx={dashboardBackgroundStyle}>
        <DashboardHeader />
      </Box>
    </>
  )
}

export default TasksPage;
