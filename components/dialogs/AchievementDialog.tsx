import { useState, MouseEventHandler } from 'react'
import { useForm } from 'react-hook-form'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import { Achievement } from '@/types'

interface AchievementDialogProps {
  achievement: Achievement | null,
  onClose: MouseEventHandler,
  onSubmit: () => void,
}

const AchievementDialog = ({ achievement, onClose, onSubmit }: AchievementDialogProps) => {
  const [description, setDescription] = useState(achievement?.description || '')

  const { handleSubmit } = useForm()

  const dialogTitle = achievement ? 'Edit Achievement' : 'Create Achievement'
  const updateButtonText = achievement ? 'Update Achievement' : 'Create Achievement'

  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle color="primary.main">{dialogTitle}</DialogTitle>
      <DialogContent>

        <Stack spacing={3} mt={3}>
          <TextField
            value={description}
            label="Achievement Description"
            fullWidth
            onChange={e => setDescription(e.target.value)}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSubmit(onSubmit)}>
          {updateButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AchievementDialog