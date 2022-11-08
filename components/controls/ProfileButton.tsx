import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// To-do: We should extract the actual user from the store
const user = {
  firstName: 'Yan',
  lastName: 'Gordeev'
}

const profileButtonStyle = {
  cursor: 'pointer',
  '&:hover': {
    bgcolor: 'grey.800',
  }
}

const ProfileButton = () => {
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

      {user && <Typography>
        <Typography component="span" color="grey.500">
          Hello,
        </Typography>
        {user.firstName}
      </Typography>}

      <KeyboardArrowDownIcon sx={{ color: 'grey.500' }} />
    </Stack>
  )
}

export default ProfileButton
