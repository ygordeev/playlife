import Typography from '@mui/material/Typography'
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
        <Typography variant="subtitle2" color="grey.500">
          See All (24)
        </Typography>
      </HorizontalCenteredStack>

      <HorizontalCenteredStack justifyContent="space-between" mt={1}>
        {achievementIcons.map(iconDetails => (
          <AchievementIcon
            key={iconDetails.id}
            size={50}
            {...iconDetails}
          />
        ))}
      </HorizontalCenteredStack>
    </GradientCard>
  )
}

export default SummaryRecentAchievements