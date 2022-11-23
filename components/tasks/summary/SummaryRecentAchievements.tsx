import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import { GradientCard, HorizontalCenteredStack } from '@/components/layout'
import { AchievementIcon } from '@/components/icons'

// To-do: The achievement icons should be extracted from the store
import { achievements } from '@/constants'

const SummaryRecentAchievements = () => {
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
          See All (24)
        </Link>
      </HorizontalCenteredStack>

      <HorizontalCenteredStack justifyContent="space-between" mt={1}>
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