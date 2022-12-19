import Box from '@mui/material/Box'
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress'

const Spinner = ({ size }: { size: CircularProgressProps['size'] }) => {
  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress size={size} />
    </Box>
  )
}

export default Spinner
