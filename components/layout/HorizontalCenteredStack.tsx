import { PropsWithChildren } from 'react'
import Stack from '@mui/material/Stack';

const HorizontalCenteredStack: typeof Stack = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      {...props}
    >
      {children}
    </Stack>
  )
}

export default HorizontalCenteredStack