import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { GradientCard, IconCard, HorizontalCenteredStack } from '@/components/layout'

const SummaryNextGoal = () => {
  return (
    <GradientCard>
      <Stack spacing={1}>
        <HorizontalCenteredStack spacing={2}>
          <IconCard>
            <AssignmentIcon />
          </IconCard>
          <Typography>Next Goal</Typography>
        </HorizontalCenteredStack>
        <Typography color="grey.500">
          This feature is coming soon
        </Typography>
      </Stack>
    </GradientCard>
  )
}

export default SummaryNextGoal

/**
 * NEXT GOAL SECTION
 * 
 * This section is still in development along with the goal system.
 * Once the goals are rolled out, Next Goal will be come available
 * too. The previous template is preserved in the comments.
 * 
 * Yan Gordeev, 12/02/2022
 */

// const SummaryNextGoal = () => {
//   return (
//     <GradientCard>
//       <HorizontalCenteredStack justifyContent="space-between" spacing={1}>
//         <Typography variant="subtitle2" color="primary.main">
//           Next Goal
//         </Typography>

//         <ComplexityIndicator complexity={nextGoal.complexity} />

//         <Typography variant="subtitle2" color="grey.500">
//           {formatDate(nextGoal.dueDate)}
//         </Typography>
//       </HorizontalCenteredStack>

//       <HorizontalCenteredStack justifyContent="space-between" mt={1}>
//         <Typography variant="subtitle2">{nextGoal.name}</Typography>

//         <CircularProgress
//           currentCount={nextGoal.finishedTasks}
//           totalCount={nextGoal.plannedTasks}
//           size={50}
//         />
//       </HorizontalCenteredStack>
//     </GradientCard>
//   )
// }