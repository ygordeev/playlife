import Typography from '@mui/material/Typography'
import BoltIcon from '@mui/icons-material/Bolt';
import { GradientCard, IconCard, HorizontalCenteredStack } from '@/components/layout'
import { AnimatedProgressBar } from '@/components/charts';

// To-do: Progress should be extracted from the store
const finishedTasks = 18
const plannedTasks = 25

const SummaryWeeklyProgress = () => {
  return (
    <GradientCard>
      <HorizontalCenteredStack spacing={2}>
        <IconCard>
          <BoltIcon fontSize="large" />
        </IconCard>

        <Typography>Weekly Progress</Typography>
      </HorizontalCenteredStack>

      <AnimatedProgressBar
        currentCount={finishedTasks}
        totalCount={plannedTasks}
      />
    </GradientCard>
  )
}

export default SummaryWeeklyProgress