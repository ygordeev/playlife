import Stack, { StackProps } from '@mui/material/Stack'
import SummaryNewTasks from './SummaryNextGoal'
import SummaryCompletedTasks from './SummaryCompletedTasks'
import SummaryRecentAchievements from './SummaryRecentAchievements'
import SummaryWeeklyProgress from './SummaryWeeklyProgress'

const DashboardSummary = (props: StackProps) => {
  return (
    <Stack
      component="section"
      direction="row"
      justifyContent="space-evenly"
      color="common.white"
      spacing={6}
      {...props}
    >
      <SummaryNewTasks />
      <SummaryCompletedTasks />
      <SummaryWeeklyProgress />
      <SummaryRecentAchievements />
    </Stack>
  )
}

export default DashboardSummary