import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import { statisticsSelectors, statisticsThunks } from '@/store/statistics'
import { GradientCard, IconCard, HorizontalCenteredStack } from '@/components/layout'
import { AnimatedComparisonCounter } from '@/components/gauges'
import { useDispatch } from '@/hooks'
import SummaryCardSkeleton from './SummaryCardSkeleton'

const SummaryCompletedTasks = () => {
  const dispatch = useDispatch()
  const completedTasks = useSelector(statisticsSelectors.weeklyCompletedTasks)

  const [completedTasksYest, setCompletedTasksYest] = useState(0)
  const [completedTasksToday, setCompletedTasksToday] = useState(0)

  useEffect(() => {
    const getCompletedTasks = async () => {
      try {
        await dispatch(statisticsThunks.getWeeklyCompletedTasks())
      } catch (e: unknown) {
        const error = e as Error
        toast.error(error.message)
      }
    }
    getCompletedTasks()
  }, [dispatch])

  useEffect(() => {
    if (!completedTasks.length) return
    const [recordToday, recordYest] = completedTasks

    setCompletedTasksYest(recordYest?.value?.length || 0)
    setCompletedTasksToday(recordToday?.value?.length || 0)
  }, [completedTasks])

  if (!completedTasks.length) return <SummaryCardSkeleton />

  return (
    <GradientCard>
      <Stack spacing={1}>
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
      </Stack>
    </GradientCard>
  )
}

export default SummaryCompletedTasks