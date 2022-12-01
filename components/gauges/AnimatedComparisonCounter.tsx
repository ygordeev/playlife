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
  
  const count = useCountUp(currentCount, currentCount / 10)
  const progress = useMemo(() => {
    if (!previousCount) return 0
    return Math.round((currentCount / previousCount - 1) * 100)
  }, [previousCount, currentCount])

  const getProgressText = () => {
    if (progress < 0) return `${progress}%`
    if (progress >= 0) return `+${progress}%`
    return null
  }
  const progressText = getProgressText()
  const progressTextColor = progress >= 0 ? 'success.light' : 'error.light'
  const timeFrameTextColor = progressText ? 'grey.500' : 'primary.main'

  return (
    <HorizontalCenteredStack mt={1}>
      <Typography variant="h4" mr={2}>
        {count}
      </Typography>
      {progressText && (
        <Typography component="span" color={progressTextColor} mr={0.5}>
          {progressText}
        </Typography>
      )}
      <Typography component="span" color={timeFrameTextColor}>
        {progressText ? `from ${timeFrameText}` : 'Great progress. Keep it coming!'}
      </Typography>
    </HorizontalCenteredStack>
  )
}

export default AnimatedComparisonCounter