import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import { GradientCard, HorizontalCenteredStack } from '@/components/layout'
import { AchievementIcon } from '@/components/icons'

// To-do: The achievement icons should be extracted from the store
import { achievementIcons } from '@/constants'

const SummaryRecentAchievements = () => {
  return (
    <GradientCard>
      <HorizontalCenteredStack justifyContent="space-between" spacing={1}>
        <Typography variant="subtitle2" color="primary.light">
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
        {achievementIcons.map(icon => (
          <Tooltip key={icon.id} title={icon.description}>
            <div>
              <AchievementIcon
                size={50}
                {...icon}
              />
            </div>
          </Tooltip>
        ))}
      </HorizontalCenteredStack>
    </GradientCard>
  )
}

export default SummaryRecentAchievements