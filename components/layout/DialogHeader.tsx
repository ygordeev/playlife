import { MouseEventHandler } from 'react';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { HorizontalCenteredStack } from '@/components/layout'

interface DialogHeaderProps {
  title: string,
  onClose: MouseEventHandler,
}

const dialogIconStyle = {
  color: 'grey.500',
  cursor: 'pointer',
  '&:hover': {
    color: 'primary.main',
  }
}

const DialogHeader = ({ title, onClose }: DialogHeaderProps) => {
  return (
    <HorizontalCenteredStack justifyContent="space-between">
      <Typography color="primary.main" variant="h6">
        {title}
      </Typography>
      <CloseIcon sx={dialogIconStyle} onClick={onClose} />
    </HorizontalCenteredStack>
  )
}

export default DialogHeader