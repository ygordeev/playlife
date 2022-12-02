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
  const { currentCount, previousCount, timeFrameText } = props
  const isProgressEmpty = !currentCount || !previousCount
  
  const count = useCountUp(currentCount, currentCount / 10)
  const progress = useMemo(() => {
    if (isProgressEmpty) return 0
    return Math.round((currentCount / previousCount - 1) * 100)
  }, [previousCount, currentCount, isProgressEmpty])

  const isProgressPositive = progress >= 0
  const progressText = isProgressPositive ? `+${progress}%` : `${progress}%`
  const progressTextColor = isProgressPositive ? 'success.light' : 'error.light'

  return (
    <HorizontalCenteredStack>
      <Typography variant="h4" mr={2}>
        {count}
      </Typography>
      {isProgressEmpty ? (
        <Typography color="primary.main">
          {!currentCount ? 'No completed tasks today' : 'Great progress. Keep it coming!'}
        </Typography>
      ) : (
        <>
          <Typography component="span" color={progressTextColor} mr={0.5}>
            {progressText}
          </Typography>
          <Typography component="span" color="grey.500">
            from {timeFrameText}
          </Typography>
        </>
      )}
    </HorizontalCenteredStack>
  )
}

export default AnimatedComparisonCounter