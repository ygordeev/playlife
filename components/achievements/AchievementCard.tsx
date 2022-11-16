import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { AchievementIcon } from '@/components/icons'
import { HorizontalCenteredStack } from '@/components/layout';
import { formatDate, getLineClampStyle } from '@/utils';
import { Achievement } from '@/types'

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <HorizontalCenteredStack spacing={2.5}>
        <AchievementIcon
          size={75}
          {...achievement}
        />
        <Stack width={200}>
          <Typography sx={getLineClampStyle(3)}>
            {achievement.description}
          </Typography>
          <Typography variant="subtitle2" color="grey.500">
            Achieved on: {formatDate(achievement.dateAchieved)}
          </Typography>
        </Stack>
      </HorizontalCenteredStack>
    </Paper>
  )
}

export default AchievementCard