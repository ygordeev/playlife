import Typography from '@mui/material/Typography'
import {
  GradientCard,
  HorizontalCenteredStack,
  ComplexityIndicator,
} from '@/components/layout'
import { CircularProgress } from '@/components/gauges'
import { formatDate } from '@/utils'

// To-do: Next goal should be extracted from the store
import { nextGoal } from '@/constants'

const SummaryNextGoal = () => {
  return (
    <GradientCard>
      <HorizontalCenteredStack justifyContent="space-between" spacing={1}>
        <Typography variant="subtitle2" color="primary.main">
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

export default SummaryNextGoal