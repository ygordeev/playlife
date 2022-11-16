import Stack from '@mui/material/Stack';
import { navigationOptions } from '@/constants';
import { Link } from '@/components/controls'

const linkStyle = {
  '&:hover': {
    color: 'primary.main'
  }
}

const DashboardHeaderNavigation = () => {
  return (
    <Stack
      component="ul"
      direction="row"
      spacing={4}
    >
      {navigationOptions.map(option => (
        <Link
          key={option.label}
          href={option.href}
          label={option.label}
          color="inherit"
          underline="none"
          sx={linkStyle}
        />
      ))}
    </Stack>
  )
}

export default DashboardHeaderNavigation;
