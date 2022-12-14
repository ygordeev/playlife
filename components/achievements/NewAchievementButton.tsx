import Paper, { PaperProps } from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const newAchievementButtonStyle = {
  width: 327,
  height: '100%',
  cursor: 'pointer',
  p: 2,
  '&:hover': {
    backgroundColor: 'grey.800'
  }
}

const NewAchievementButton = (paperProps: PaperProps) => {
  return (
    <Paper sx={newAchievementButtonStyle} {...paperProps}>
      <Stack
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <AddCircleOutlineIcon color="primary" sx={{ fontSize: '3rem' }} />

        <Typography color="primary.main">
          Create New Achievement
        </Typography>
      </Stack>
    </Paper>
  )
}

export default NewAchievementButton
