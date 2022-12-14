import Paper, { PaperProps } from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { AchievementIcon } from '@/components/icons'
import { HorizontalCenteredStack } from '@/components/layout'
import { formatDate, getLineClampStyle } from '@/utils'
import { Achievement } from '@/types'

type AchievementCardProps = PaperProps & {
  achievement: Achievement,
}

const achievementCardStyle = {
  cursor: 'pointer',
  p: 2,
  '&:hover': {
    backgroundColor: 'grey.800'
  }
}

const AchievementCard = ({ achievement, ...paperProps }: AchievementCardProps) => {
  return (
    <Paper sx={achievementCardStyle} {...paperProps}>
      <HorizontalCenteredStack spacing={2.5}>
        <AchievementIcon
          size={75}
          {...achievement}
        />
        <Stack width={200}>
          <Typography sx={getLineClampStyle(3)}>
            {achievement.description}
          </Typography>
          {achievement.dateAchieved && (
            <Typography variant="subtitle2" color="grey.500">
              Achieved on: {formatDate(achievement.dateAchieved)}
            </Typography>
          )}
        </Stack>
      </HorizontalCenteredStack>
    </Paper>
  )
}

export default AchievementCard
