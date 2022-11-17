import { useState, MouseEventHandler } from 'react'
import { useForm } from 'react-hook-form'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AchievementColorPicker } from '@/components/controls';
import { AchievementIcon } from '@/components/icons'
import { Achievement } from '@/types'

interface AchievementDialogProps {
  achievement?: Achievement,
  onClose: MouseEventHandler,
  onSubmit: () => void,
}

const defaultAchievement: Achievement = {
  backgroundColor: 'black',
  borderColor: 'white',
  ribbonColor: 'black',
  description: '',
  emoji: '',
}

const AchievementDialog = ({ achievement = defaultAchievement, onClose, onSubmit }: AchievementDialogProps) => {
  const [description, setDescription] = useState(achievement.description || '')

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
          <Box display="flex" justifyContent="center">
            <AchievementIcon
              size={150}
              {...achievement}
            />
          </Box>

          <TextField
            value={description}
            label="Achievement Description"
            fullWidth
            onChange={e => setDescription(e.target.value)}
          />

          <Stack spacing={1}>
            <Typography color="grey.500">Icon Colors</Typography>
            <AchievementColorPicker
              backgroundColor={achievement.backgroundColor}
              borderColor={achievement.borderColor}
              ribbonColor={achievement.ribbonColor}
            />
          </Stack>
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