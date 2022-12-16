import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { achievementsSelectors } from '@/store/achievements'
import { GradientCard, HorizontalCenteredStack } from '@/components/layout'
import { Link } from '@/components/controls'
import { AchievementIcon } from '@/components/icons'
import { maxSummaryAchievementCount } from '@/constants'
import SummaryCardSkeleton from './SummaryCardSkeleton'

const getAchievementStackStyle = (achievementCount: number) => ({
  justifyContent: achievementCount < maxSummaryAchievementCount ? 'flex-start' : 'space-between',
  mt: 1,
})

const SummaryRecentAchievements = () => {
  const achievements = useSelector(achievementsSelectors.achievements)
  const achievementsReceived = useSelector(achievementsSelectors.achievementsReceived)

  const achievementSlice = achievements.slice(0, 4)

  if (!achievementsReceived) return <SummaryCardSkeleton />
  
  return (
    <GradientCard>
      <HorizontalCenteredStack justifyContent="space-between" spacing={1}>
        <Typography variant="subtitle2" color="primary.main">
          Recent Achievements
        </Typography>
        <Link
          href="/achievements"
          variant="subtitle2"
          color="grey.500"
        >
          See All ({achievements.length})
        </Link>
      </HorizontalCenteredStack>

      <HorizontalCenteredStack
        spacing={2}
        sx={getAchievementStackStyle(achievements.length)}
      >
        {achievementSlice.map(achievement => (
          <Tooltip key={achievement.id} title={achievement.description}>
            <div>
              <AchievementIcon
                size={50}
                hoverable
                {...achievement}
              />
            </div>
          </Tooltip>
        ))}
      </HorizontalCenteredStack>
    </GradientCard>
  )
}

export default SummaryRecentAchievements