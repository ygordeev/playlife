import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack'
import { navigationOptions } from '@/constants'
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
          color="inherit"
          underline="none"
          sx={getLinkStyle(option.href === asPath)}
        >
          {option.label}
        </Link>
      ))}
    </Stack>
  )
}

export default HeaderSectionNavigation;
