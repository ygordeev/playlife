import Typography from '@mui/material/Typography'
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { GradientCard, IconCard, HorizontalCenteredStack } from '@/components/layout'
import { AnimatedComparisonCounter } from '@/components/gauges';

// To-do: Progress should be extracted from the store
const completedTasks = 11
const yesterdaysCompletedTasks = 8

const SummaryCompletedTasks = () => {
  return (
    <GradientCard>
      <HorizontalCenteredStack spacing={2}>
        <IconCard>
          <BeenhereIcon />
        </IconCard>

        <Typography>Tasks Completed</Typography>
      </HorizontalCenteredStack>

      <AnimatedComparisonCounter
        currentCount={completedTasks}
        previousCount={yesterdaysCompletedTasks}
        timeFrameText="yesterday"
      />
    </GradientCard>
  )
}

export default SummaryCompletedTasks