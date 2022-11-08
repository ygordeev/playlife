import Typography from '@mui/material/Typography'
import BoltIcon from '@mui/icons-material/Bolt';
import { GradientCard, IconCard, HorizontalCenteredStack } from '@/components/layout'

const SummaryWeeklyProgress = () => {
  return (
    <GradientCard>
      <HorizontalCenteredStack spacing={2}>
        <IconCard>
          <BoltIcon fontSize="large" />
        </IconCard>

        <Typography>Weekly Progress</Typography>
      </HorizontalCenteredStack>

      <HorizontalCenteredStack mt={1}>
        <Typography>68%</Typography>
      </HorizontalCenteredStack>
    </GradientCard>
  )
}

export default SummaryWeeklyProgress