import { ReactNode } from 'react'
import Box from '@mui/material/Box'

const iconCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 1,
  borderColor: 'grey.800',
  borderRadius: 2,
  color: 'primary.light',
  p: 1,
}

const IconCard = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={iconCardStyle}>
      {children}
    </Box>
  )
}

export default IconCard