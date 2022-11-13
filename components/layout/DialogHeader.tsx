import { MouseEventHandler } from 'react';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { HorizontalCenteredStack } from '@/components/layout'

interface DialogHeaderProps {
  title: string,
  onClose: MouseEventHandler,
  onEnableEditing?: MouseEventHandler,
}

const dialogIconStyle = {
  marginLeft: 1,
  color: 'grey.500',
  cursor: 'pointer',
  '&:hover': {
    color: 'primary.main',
  }
}

const DialogHeader = ({ title, onEnableEditing, onClose }: DialogHeaderProps) => {
  return (
    <HorizontalCenteredStack justifyContent="space-between">
      <Typography
        color="primary.main"
        variant="h6"
        flexGrow={1}
      >
        {title}
      </Typography>
      <EditIcon sx={dialogIconStyle} onClick={onEnableEditing} />
      <CloseIcon sx={dialogIconStyle} onClick={onClose} />
    </HorizontalCenteredStack>
  )
}

export default DialogHeader