import { MouseEventHandler } from 'react'
import { useForm } from 'react-hook-form'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { TextField, EmojiPicker } from '@/components/inputs'
import { AchievementIcon } from '@/components/icons'
import { AchievementColorPicker } from '@/components/controls'
import { defaultAchievement } from '@/constants'
import { Achievement } from '@/types'

interface AchievementDialogProps {
  achievement?: Achievement,
  onClose: MouseEventHandler,
  onSubmit: (achievement: Achievement) => void,
}

const AchievementDialog = ({ achievement = defaultAchievement, onClose, onSubmit }: AchievementDialogProps) => {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Achievement>({ defaultValues: achievement })

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
            <AchievementIcon size={150} {...watch()} />
          </Box>

          <TextField
            name="description"
            label="Achievement Description"
            validators={['required']}
            control={control}
            errorMessage={errors.description?.message}
            fullWidth
          />

          <Stack spacing={1}>
            <Typography color="grey.500">Icon Colors</Typography>
            <AchievementColorPicker
              backgroundColor={watch('backgroundColor')}
              borderColor={watch('borderColor')}
              ribbonColor={watch('ribbonColor')}
              onChange={(colorType, color) => setValue(colorType, color)}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography color="grey.500">Icon Emoji</Typography>
            <EmojiPicker
              name="emoji"
              validators={['required']}
              control={control}
              errorMessage={errors.emoji?.message}
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