import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'

const skeletonStyle = {
  transform: 'none',
  flexGrow: 1,
}

const TaskBoardSkeleton = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      flex={1}
    >
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
      <Skeleton sx={skeletonStyle} />
    </Stack>
  )
}

export default TaskBoardSkeleton