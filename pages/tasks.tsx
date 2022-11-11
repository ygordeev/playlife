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
        color="common.white"
        height="100vh"
        overflow="hidden"
        spacing={5}
        px={5}
        py={2}
      >
        <DashboardHeader />
        <DashboardSummary />
        <DashboardTasks flex={1} />
      </Stack>
    </>
  )
}

export default TasksPage;
