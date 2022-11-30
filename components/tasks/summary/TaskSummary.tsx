import Stack, { StackProps } from '@mui/material/Stack'
import SummaryNewTasks from './SummaryNextGoal'
import SummaryCompletedTasks from './SummaryCompletedTasks'
import SummaryAchievements from './SummaryAchievements'
import SummaryWeeklyProgress from './SummaryWeeklyProgress'

const TaskSummary = (props: StackProps) => {
  return (
    <Stack
      component="section"
      direction="row"
      justifyContent="space-between"
      spacing={2}
      {...props}
    >
      <SummaryNewTasks />
      <SummaryCompletedTasks />
      <SummaryWeeklyProgress />
      <SummaryAchievements />
    </Stack>
  )
}

export default TaskSummary