import { FC } from 'react';
import { navigationOptions } from '@/constants';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const LinkStyle = {
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
      my={0}
    >
      {navigationOptions.map(option => (
        <Link
          key={option.label}
          href={option.href}
          color="inherit"
          underline="none"
          sx={LinkStyle}
        >
          {option.label}
        </Link>
      ))}
    </Stack>
  )
}

export default DashboardHeaderNavigation;
