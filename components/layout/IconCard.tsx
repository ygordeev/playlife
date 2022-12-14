import { ReactNode } from 'react'
import Box from '@mui/material/Box'

const iconCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  width: 40,
  height: 40,
  border: 1,
  borderColor: 'grey.800',
  borderRadius: 2,
  color: 'primary.main',
}

const IconCard = ({ children }: { children: ReactNode }) => {
  return <Box sx={iconCardStyle}>{children}</Box>
}

export default IconCard
