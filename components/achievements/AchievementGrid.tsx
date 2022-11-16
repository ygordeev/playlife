import Grid from '@mui/material/Grid';
import AchievementCard from './AchievementCard';

// To-do: The achievement icons should be extracted from the store
import { achievementIcons } from '@/constants'

const AchievementGrid = () => {
  return (
    <Grid container spacing={2}>
      {achievementIcons.map(achievement => (
        <Grid key={achievement.id} item>
          <AchievementCard achievement={achievement} />
        </Grid>
      ))}
    </Grid>
  )
}

export default AchievementGrid