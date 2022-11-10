import type { NextPage } from 'next'
import Head from 'next/head'
import Stack from '@mui/material/Stack';
import { DashboardHeader, DashboardSummary, DashboardTasks } from '@/components/dashboard';

const TasksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Tasks</title>
      </Head>

      <Stack
        bgcolor="grey.extradark"
        height="100vh"
      >
        <DashboardHeader />
        <DashboardSummary mt={2} />
        <DashboardTasks mt={5} />
      </Stack>
    </>
  )
}

export default TasksPage;
