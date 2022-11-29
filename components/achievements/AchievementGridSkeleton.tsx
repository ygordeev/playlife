import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

const AchievementGridSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {Array(12).fill(null).map((n, idx) => (
        <Grid key={idx} item>
          <Skeleton width={327} height={128} sx={{ transform: 'none' }} />
        </Grid>
      ))}
    </Grid>
  )
}

export default AchievementGridSkeleton