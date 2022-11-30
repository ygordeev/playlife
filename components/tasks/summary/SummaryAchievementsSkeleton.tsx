import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'

const skeletonStyle = {
  width: 50,
  height: 50,
}

const SummaryAchievementsSkeleton = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      flex={1}
    >
      <Skeleton variant="circular" sx={skeletonStyle} />
      <Skeleton variant="circular" sx={skeletonStyle} />
      <Skeleton variant="circular" sx={skeletonStyle} />
      <Skeleton variant="circular" sx={skeletonStyle} />
    </Stack>
  )
}

export default SummaryAchievementsSkeleton