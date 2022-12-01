import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Typography from '@mui/material/Typography'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import { statisticsSelectors, statisticsThunks } from '@/store/statistics'
import { GradientCard, IconCard, HorizontalCenteredStack } from '@/components/layout'
import { AnimatedComparisonCounter } from '@/components/gauges'
import { useDispatch } from '@/hooks'
import { padArrayStart } from '@/utils'
import { StatisticsTableTypes } from '@/types'
import SummaryCardSkeleton from './SummaryCardSkeleton'

const SummaryCompletedTasks = () => {
  const dispatch = useDispatch()
  const completedTasks = useSelector(statisticsSelectors.completedTasks)

  const [completedTasksYest, setCompletedTasksYest] = useState(0)
  const [completedTasksToday, setCompletedTasksToday] = useState(0)

  useEffect(() => {
    const getCompletedTasks = async () => {
      try {
        await dispatch(statisticsThunks.getRecentStatistics({
          type: StatisticsTableTypes.CompletedTasks,
          count: 2,
        }))
      } catch (e: unknown) {
        const error = e as Error
        toast.error(error.message)
      }
    }
    getCompletedTasks()
  }, [dispatch])

  useEffect(() => {
    if (!completedTasks.length) return
    const [recordYest, recordToday] = padArrayStart(completedTasks, 2)
    setCompletedTasksYest(recordYest?.value?.length || 0)
    setCompletedTasksToday(recordToday?.value?.length || 0)
  }, [completedTasks])

  if (!completedTasks.length) return <SummaryCardSkeleton />

  return (
    <GradientCard>
      <HorizontalCenteredStack spacing={2}>
        <IconCard>
          <BeenhereIcon />
        </IconCard>

        <Typography>Tasks Completed</Typography>
      </HorizontalCenteredStack>

      <AnimatedComparisonCounter
        currentCount={completedTasksToday}
        previousCount={completedTasksYest}
        timeFrameText="yesterday"
      />
    </GradientCard>
  )
}

export default SummaryCompletedTasks