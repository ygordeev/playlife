import type { NextPage } from 'next'
import Head from 'next/head'
import { DashboardHeader } from '@/components/dashboard';
import Box from '@mui/material/Box';

const TasksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Tasks</title>
      </Head>

      <Box
        bgcolor="grey.900"
        height="100vh"
      >
        <DashboardHeader />
      </Box>
    </>
  )
}

export default TasksPage;
