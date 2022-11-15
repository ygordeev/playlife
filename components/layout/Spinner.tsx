import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  )
}

export default Spinner