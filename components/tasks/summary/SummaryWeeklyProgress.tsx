import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import BoltIcon from '@mui/icons-material/Bolt'
import { tasksSelectors } from '@/store/tasks'
import { statisticsSelectors } from '@/store/statistics'
import { GradientCard, IconCard, HorizontalCenteredStack } from '@/components/layout'
import { LinearProgress } from '@/components/gauges'
import SummaryCardSkeleton from './SummaryCardSkeleton'

const SummaryWeeklyProgress = () => {
  const tasks = useSelector(tasksSelectors.tasksList)
  const completedTasks = useSelector(statisticsSelectors.weeklyCompletedTasks)

  const finishedTasks = useMemo(() => {
    const taskArray = completedTasks.reduce<number[]>((acc, task) => {
      return task?.value ? [...acc, ...task.value] : acc
    }, [])
    return [...new Set(taskArray)]
  }, [completedTasks])

  if (!completedTasks.length) return <SummaryCardSkeleton />

  return (
    <GradientCard>
      <Stack spacing={1}>
        <HorizontalCenteredStack spacing={2}>
          <IconCard>
            <BoltIcon fontSize="large" />
          </IconCard>

          <Typography>Weekly Progress</Typography>
        </HorizontalCenteredStack>

        <LinearProgress
          currentCount={finishedTasks.length}
          totalCount={tasks.length}
        />
      </Stack>
    </GradientCard>
  )
}

export default SummaryWeeklyProgress