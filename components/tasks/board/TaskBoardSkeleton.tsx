import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'

const skeletonStyle = {
  transform: 'none',
  flexGrow: 1,
}

const skeletonArray = Array(4).fill(null)

const TaskBoardSkeleton = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      flex={1}
    >
      {skeletonArray.map((n, idx) => (
        <Skeleton key={idx} sx={skeletonStyle} />
      ))}
    </Stack>
  )
}

export default TaskBoardSkeleton