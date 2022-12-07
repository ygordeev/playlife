import Stack from '@mui/material/Stack'
import SummaryNewTasks from './SummaryNextGoal'
import SummaryCompletedTasks from './SummaryCompletedTasks'
import SummaryAchievements from './SummaryAchievements'
import SummaryWeeklyProgress from './SummaryWeeklyProgress'

const TaskSummary = () => {
  return (
    <Stack
      component="section"
      direction="row"
      justifyContent="space-between"
      spacing={2}
    >
      <SummaryNewTasks />
      <SummaryCompletedTasks />
      <SummaryWeeklyProgress />
      <SummaryAchievements />
    </Stack>
  )
}

export default TaskSummary