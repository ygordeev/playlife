import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box';

const gradientCardStyle = {
  width: 1,
  maxWidth: 300,
  background: 'linear-gradient(45deg, #1E1F25 0%, #222328 50%, #2A2A33 100%)',
  color: 'common.white',
  border: 1,
  borderColor: 'grey.800',
  borderRadius: 2,
  px: 2,
  py: 1,
}

const GradientCard = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Box
      sx={gradientCardStyle}
      {...props}
    >
      {children}
    </Box>
  )
}

export default GradientCard