import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import { achievementsSelectors } from '@/store/achievements'
import { GradientCard, HorizontalCenteredStack } from '@/components/layout'
import { Link } from '@/components/controls'
import { AchievementIcon } from '@/components/icons'
import SummaryCardSkeleton from './SummaryCardSkeleton'

const MAX_ACHIEVEMENT_COUNT = 4

const getAchievementStackStyle = (achievementCount: number) => ({
  justifyContent: achievementCount < MAX_ACHIEVEMENT_COUNT ? 'flex-start' : 'space-between',
  mt: 1,
})

const SummaryRecentAchievements = () => {
  const achievements = useSelector(achievementsSelectors.achievements)
  const achievementsReceived = useSelector(achievementsSelectors.achievementsReceived)

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
        {achievements.slice(0, 4).map(achievement => (
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