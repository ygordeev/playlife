import Stack from '@mui/material/Stack'
import SummaryNewTasks from './SummaryNextGoal'
import SummaryCompletedTasks from './SummaryCompletedTasks'
import SummaryRecentAchievements from './SummaryRecentAchievements'
import SummaryWeeklyProgress from './SummaryWeeklyProgress'

const DashboardSummary = () => {
  return (
    <Stack
      component="section"
      direction="row"
      justifyContent="space-evenly"
      color="common.white"
      spacing={6}
    >
      <SummaryNewTasks />
      <SummaryCompletedTasks />
      <SummaryRecentAchievements />
      <SummaryWeeklyProgress />
    </Stack>
  )
}

export default DashboardSummary