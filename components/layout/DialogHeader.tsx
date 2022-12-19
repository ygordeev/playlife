import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { HorizontalCenteredStack, Spinner } from '@/components/layout'

interface DialogHeaderProps {
  title: string,
  onClose: () => void,
  onDelete?: () => void,
  isDeleting?: boolean,
}

const getIconStyle = (activeColor: string) => ({
  color: 'grey.500',
  cursor: 'pointer',
  '&:hover': {
    color: activeColor,
  }
})

const DialogHeader = ({ title, isDeleting, onDelete, onClose }: DialogHeaderProps) => {
  const DialogHeaderDeleteButton = isDeleting
    ? <Spinner size={18} />
    : <DeleteIcon sx={getIconStyle('error.light')} onClick={onDelete} />

  return (
    <DialogTitle>
      <HorizontalCenteredStack justifyContent="space-between">
        <Typography color="primary.main">{title}</Typography>
        <HorizontalCenteredStack spacing={1}>
          {onDelete && DialogHeaderDeleteButton}
          <CloseIcon sx={getIconStyle('primary.main')} onClick={onClose} />
        </HorizontalCenteredStack>
      </HorizontalCenteredStack>
    </DialogTitle>
  )
}

export default DialogHeader