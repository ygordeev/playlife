/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import { DashboardHeader } from '@/components/dashboard';
import { DashboardBackground } from '@/styles';

const TasksPage: NextPage = () => {
  return (
    <DashboardBackground>
      <DashboardHeader />
    </DashboardBackground>
  )
}

export default TasksPage;
