import Head from 'next/head'
import type { NextPage } from 'next'
import { PrimaryLayout } from '@/layouts'
import { DashboardSummary, DashboardTasks } from '@/components/dashboard';

const TasksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Tasks</title>
      </Head>

      <PrimaryLayout>
        <DashboardSummary />
        <DashboardTasks flex={1} />
      </PrimaryLayout>
    </>
  )
}

export default TasksPage;
