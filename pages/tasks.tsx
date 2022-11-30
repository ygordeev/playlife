import Head from 'next/head'
import type { NextPage } from 'next'
import { PrimaryLayout } from '@/layouts'
import { TaskSummary, TaskBoard } from '@/components/tasks'

const TasksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Tasks</title>
      </Head>

      <PrimaryLayout>
        <TaskSummary />
        <TaskBoard flex={1} />
      </PrimaryLayout>
    </>
  )
}

export default TasksPage;
