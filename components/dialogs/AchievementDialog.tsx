import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LoadingButton from '@mui/lab/LoadingButton'
import { achievementsThunks } from '@/store/achievements'
import { TextField, EmojiPicker } from '@/components/inputs'
import { AchievementIcon } from '@/components/icons'
import { AchievementColorPicker } from '@/components/controls'
import { useDispatch } from '@/hooks'
import { defaultAchievement } from '@/constants'
import { NewAchievement } from '@/types'

interface AchievementDialogProps {
  achievement?: NewAchievement,
  onClose: () => void,
}

const AchievementDialog = ({ achievement = defaultAchievement, onClose }: AchievementDialogProps) => {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAchievement>({ defaultValues: achievement })

  const dispatch = useDispatch()
  const [isUpdatingAchievement, setIsUpdatingAchievement] = useState(false)

  const dialogTitle = achievement.id ? 'Edit Achievement' : 'Create Achievement'
  const updateButtonText = achievement.id ? 'Update Achievement' : 'Create Achievement'

  const onSubmit = async (achievement: NewAchievement) => {
    const thunk = achievement.id
      ? achievementsThunks.updateAchievement
      : achievementsThunks.createAchievement
    const successMessage = achievement.id
      ? 'Achievement was successfully updated'
      : 'Achievement was successfully created'

    try {
      setIsUpdatingAchievement(true)
      await dispatch(thunk(achievement))
      onClose()
      toast.success(successMessage)
    } catch (e: unknown) {
      const error = e as Error
      toast.error(error.message)
    } finally {
      setIsUpdatingAchievement(false)
    }
  }

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
              onChange={setValue}
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
        <LoadingButton loading={isUpdatingAchievement} onClick={handleSubmit(onSubmit)}>
          {updateButtonText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}

export default AchievementDialog