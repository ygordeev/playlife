import LinearGauge from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography'
import { HorizontalCenteredStack } from '@/components/layout'
import { useCountUp } from '@/hooks'

interface LinearProgressProps {
  currentCount: number,
  totalCount: number,
}

const LinearProgress = ({ currentCount, totalCount }: LinearProgressProps) => {
  const count = useCountUp(currentCount, 1)
  const progress = Math.round(count / totalCount * 100)

  return (
    <HorizontalCenteredStack spacing={1} mt={1}>
      <Typography>{progress}%</Typography>
      <LinearGauge
        value={progress}
        variant="determinate"
        sx={{ width: '100%' }}
      />

      <Typography>
        {count}
        <Typography component="span" color="grey.500">/{totalCount}</Typography>
      </Typography>
    </HorizontalCenteredStack>
  )
}

export default LinearProgress