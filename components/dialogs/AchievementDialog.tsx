import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import { achievementsThunks } from '@/store/achievements';
import { TextField, EmojiPicker } from '@/components/inputs';
import { AchievementIcon } from '@/components/icons';
import { AchievementColorPicker } from '@/components/controls';
import { DialogHeader } from '@/components/layout';
import { useDispatch } from '@/hooks';
import { defaultAchievement } from '@/constants';
import { NewAchievement, ValidatorType } from '@/types';
import DeletionConfirmationDialog from './DeletionConfirmationDialog';

interface AchievementDialogProps {
  achievement?: NewAchievement;
  onClose: () => void;
}

const validatorRequired = ['required'] as ValidatorType[];

const AchievementDialog = ({
  achievement = defaultAchievement,
  onClose,
}: AchievementDialogProps) => {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAchievement>({ defaultValues: achievement });

  const dispatch = useDispatch();
  const [isUpdatingAchievement, setIsUpdatingAchievement] = useState(false);
  const [isDeletingAchievement, setIsDeletingAchievement] = useState(false);
  const [isConfirmationAlertOpen, setIsConfirmationAlertOpen] = useState(false);

  const dialogTitle = achievement.id
    ? 'Edit Achievement'
    : 'Create Achievement';
  const updateButtonText = achievement.id
    ? 'Update Achievement'
    : 'Create Achievement';

  const onSubmit = async (achievement: NewAchievement) => {
    const thunk = achievement.id
      ? achievementsThunks.updateAchievement
      : achievementsThunks.createAchievement;
    const successMessage = achievement.id
      ? 'Achievement was successfully updated'
      : 'Achievement was successfully created';

    try {
      setIsUpdatingAchievement(true);
      await dispatch(thunk(achievement));
      onClose();
      toast.success(successMessage);
    } catch (e: unknown) {
      const error = e as Error;
      toast.error(error.message);
    } finally {
      setIsUpdatingAchievement(false);
    }
  };

  const showConfirmationAlert = () => {
    achievement.id && setIsConfirmationAlertOpen(true);
  };

  const onDelete = async () => {
    if (!achievement.id) return;
    try {
      setIsDeletingAchievement(true);
      await dispatch(achievementsThunks.deleteAchievement(achievement.id));
      onClose();
      toast.success('Achievement was successfully deleted');
    } catch (e: unknown) {
      const error = e as Error;
      toast.error(error.message);
    } finally {
      setIsDeletingAchievement(false);
    }
  };

  return (
    <>
      <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogHeader
          title={dialogTitle}
          isDeleting={isDeletingAchievement}
          onDelete={showConfirmationAlert}
          onClose={onClose}
        />
        <DialogContent>
          <Stack spacing={3} mt={3}>
            <Box display="flex" justifyContent="center">
              <AchievementIcon size={150} {...watch()} />
            </Box>

            <TextField
              name="description"
              label="Achievement Description"
              validators={validatorRequired}
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
                validators={validatorRequired}
                control={control}
                errorMessage={errors.emoji?.message}
              />
            </Stack>
          </Stack>
        </DialogContent>

        <DialogActions>
          <LoadingButton
            loading={isUpdatingAchievement}
            onClick={handleSubmit(onSubmit)}
          >
            {updateButtonText}
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <DeletionConfirmationDialog
        isOpen={isConfirmationAlertOpen}
        entityType="achievement"
        onCancel={() => setIsConfirmationAlertOpen(false)}
        onConfirm={onDelete}
      />
    </>
  );
};

export default AchievementDialog;
