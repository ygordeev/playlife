import { useMemo } from 'react'
import Typography from '@mui/material/Typography'
import { HorizontalCenteredStack } from '@/components/layout'
import { useCountUp } from '@/hooks'

interface AnimatedComparisonCounterProps {
  currentCount: number,
  previousCount: number,
  timeFrameText: string,
}

const AnimatedComparisonCounter = (props: AnimatedComparisonCounterProps) => {
  const { currentCount, previousCount, timeFrameText } = props;
  const count = useCountUp(currentCount, 1)

  const progress = useMemo(() => {
    return Math.round((currentCount / previousCount - 1) * 100)
  }, [previousCount, currentCount])

  const progressText = progress > 0 ? `+${progress}` : progress
  const timeFrameTextColor = progress > 0 ? 'success.light' : 'error.light'

  return (
    <HorizontalCenteredStack mt={1}>
      <Typography color="white" variant="h4" mr={2}>
        {count}
      </Typography>
      <Typography component="span" color={timeFrameTextColor} mr={0.5}>
        {progressText}%
      </Typography>
      <Typography component="span" color="grey.500">
        from {timeFrameText}
      </Typography>
    </HorizontalCenteredStack>
  )
}

export default AnimatedComparisonCounter