import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

const skeletonArray = Array(12).fill(null)

const AchievementGridSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {skeletonArray.map((n, idx) => (
        <Grid key={idx} item>
          <Skeleton
            width={327}
            height={128}
            sx={{ transform: 'none' }}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default AchievementGridSkeleton
