import { FC } from 'react';
import { navigationOptions } from '@/constants';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const linkStyle = {
  '&:hover': {
    color: 'primary.main'
  }
}

const DashboardHeaderNavigation: FC = () => {
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
          color="inherit"
          underline="none"
          sx={linkStyle}
        >
          {option.label}
        </Link>
      ))}
    </Stack>
  )
}

export default DashboardHeaderNavigation;
