import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack';
import { navigationOptions } from '@/constants';
import { Link } from '@/components/controls'

const getLinkStyle = (isSelected: boolean) => ({
  borderBottom: isSelected ? 2 : 0,
  borderColor: 'primary.main',
  '&:hover': {
    color: 'primary.main'
  }
})

const HeaderSectionNavigation = () => {
  const { asPath } = useRouter()

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
          sx={getLinkStyle(option.href === asPath)}
        />
      ))}
    </Stack>
  )
}

export default HeaderSectionNavigation;
