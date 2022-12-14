import { useMemo } from 'react'
import Typography from '@mui/material/Typography'
import { HorizontalCenteredStack } from '@/components/layout'
import { useCountUp } from '@/hooks'

interface ProgressComparisonProps {
  currentCount: number,
  previousCount: number,
  timeFrameText: string,
}

const AnimatedCounter = ({ targetCount }: { targetCount: number }) => {
  const count = useCountUp(targetCount, targetCount / 10)

  return <Typography variant="h4" mr={2}>{count}</Typography>
}

const ProgressComparison = (props: ProgressComparisonProps) => {
  const { currentCount, previousCount, timeFrameText } = props
  const isProgressEmpty = !currentCount || !previousCount
  const progress = isProgressEmpty ? 0 : Math.round((currentCount / previousCount - 1) * 100)

  const isProgressPositive = progress >= 0
  const progressText = isProgressPositive ? `+${progress}%` : `${progress}%`
  const progressTextColor = isProgressPositive ? 'success.light' : 'error.light'

  return (
    <HorizontalCenteredStack>
      <AnimatedCounter targetCount={currentCount} />

      {isProgressEmpty ? (
        <Typography color="primary.main">
          {currentCount ? 'Great progress. Keep it coming!' : 'No completed tasks today'}
        </Typography>
      ) : (
        <>
          <Typography
            component="span"
            color={progressTextColor}
            mr={0.5}
          >
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

export default ProgressComparison
