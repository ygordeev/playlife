import { FC } from 'react'
import { HorizontalCenteredStack } from '@/components/layout';
import SummaryNewTasks from './SummaryNewTasks'
import SummaryCompletedTasks from './SummaryCompletedTasks'
import SummaryRecentAchievements from './SummaryRecentAchievements'
import SummaryWeeklyProgress from './SummaryWeeklyProgress'

const DashboardSummary: FC = () => {
  return (
    <HorizontalCenteredStack
      component="section"
      justifyContent="space-around"
      color="common.white"
      spacing={6}
    >
      <SummaryNewTasks />
      <SummaryCompletedTasks />
      <SummaryRecentAchievements />
      <SummaryWeeklyProgress />
    </HorizontalCenteredStack>
  )
}

export default DashboardSummary