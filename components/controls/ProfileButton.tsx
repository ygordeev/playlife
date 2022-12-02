import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { authSelectors } from '@/store/auth'

const profileButtonStyle = {
  cursor: 'pointer',
  '&:hover': {
    bgcolor: 'grey.800',
  }
}

const ProfileButton = () => {
  const user = useSelector(authSelectors.user)

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.2}
      bgcolor="grey.dark"
      borderRadius={10}
      sx={profileButtonStyle}
      p={0.5}
    >
      <Avatar src="/images/avatar.jpg" alt="Yan Gordeev" />

      {user && (
        <Typography pr={2}>
          <Typography component="span" color="grey.500">
            Hello,
          </Typography>
          {user.firstName}
        </Typography>
      )}
    </Stack>
  )
}

export default ProfileButton
