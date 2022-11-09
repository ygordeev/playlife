import Typography from '@mui/material/Typography'
import {
  GradientCard,
  HorizontalCenteredStack,
  ComplexityIndicator,
} from '@/components/layout'
import { CircularProgress } from '@/components/gauges'
import { formatDate } from '@/utils'
import { Goal, Complexity } from '@/types'

// To-do: Next goal should be extracted from the store
const nextGoal: Goal = {
  name: 'Finish reading "Japanese from Zero" (Book 1)',
  complexity: Complexity.Medium,
  finishedTasks: 18,
  plannedTasks: 25,
  dueDate: '2023-06-19',
}

const SummaryNewTasks = () => {
  return (
    <GradientCard>
      <HorizontalCenteredStack justifyContent="space-between" spacing={1}>
        <Typography variant="subtitle2" color="primary.light">
          Next Goal
        </Typography>

        <ComplexityIndicator complexity={nextGoal.complexity} />

        <Typography variant="subtitle2" color="grey.500">
          {formatDate(nextGoal.dueDate)}
        </Typography>
      </HorizontalCenteredStack>

      <HorizontalCenteredStack justifyContent="space-between" mt={1}>
        <Typography variant="subtitle2">{nextGoal.name}</Typography>

        <CircularProgress
          currentCount={nextGoal.finishedTasks}
          totalCount={nextGoal.plannedTasks}
          size={50}
        />
      </HorizontalCenteredStack>
    </GradientCard>
  )
}

export default SummaryNewTasks