import type { NextPage } from 'next'
import Head from 'next/head'
import { DashboardHeader, DashboardSummary } from '@/components/dashboard';
import Stack from '@mui/material/Stack';

const TasksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Tasks</title>
      </Head>

      <Stack
        bgcolor="grey.900"
        height="100vh"
        spacing={2}
      >
        <DashboardHeader />
        <DashboardSummary />
      </Stack>
    </>
  )
}

export default TasksPage;
