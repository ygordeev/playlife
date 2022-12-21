import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import { tasksThunks } from '@/store/tasks';
import {
  TextField,
  Dropdown,
  DatePicker,
  ImagePicker,
} from '@/components/inputs';
import { DialogHeader } from '@/components/layout';
import {
  taskComplexityOptions,
  taskStatusOptions,
  defaultTask,
} from '@/constants';
import { useDispatch } from '@/hooks';
import { NewTask, ValidatorType } from '@/types';
import DeletionConfirmationDialog from './DeletionConfirmationDialog';

interface TaskDialogProps {
  task?: NewTask;
  onClose: () => void;
}

const validatorRequired = ['required'] as ValidatorType[];

const TaskDialog = ({ task = defaultTask, onClose }: TaskDialogProps) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTask>({
    defaultValues: task,
  });

  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [isDeletingTask, setIsDeletingTask] = useState(false);
  const [isConfirmationAlertOpen, setIsConfirmationAlertOpen] = useState(false);

  const dialogTitle = task.id ? 'Edit task' : 'Create Task';
  const updateButtonText = task.id ? 'Update Task' : 'Create Task';

  const onSubmit = async (task: NewTask) => {
    const thunk = task.id ? tasksThunks.updateTask : tasksThunks.createTask;
    const successMessage = task.id
      ? 'Task was successfully updated'
      : 'Task was successfully created';

    try {
      setIsUpdatingTask(true);
      await dispatch(thunk(task));
      onClose();
      toast.success(successMessage);
    } catch (e: unknown) {
      const error = e as Error;
      toast.error(error.message);
    } finally {
      setIsUpdatingTask(false);
    }
  };

  const showConfirmationAlert = () => {
    task.id && setIsConfirmationAlertOpen(true);
  };

  const onDelete = async () => {
    if (!task.id) return;
    try {
      setIsConfirmationAlertOpen(false);
      setIsDeletingTask(true);
      await dispatch(tasksThunks.deleteTask(task.id));
      onClose();
      toast.success('Task was successfully deleted');
    } catch (e: unknown) {
      const error = e as Error;
      toast.error(error.message);
    } finally {
      setIsDeletingTask(false);
    }
  };

  return (
    <>
      <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogHeader
          title={dialogTitle}
          isDeleting={isDeletingTask}
          onDelete={showConfirmationAlert}
          onClose={onClose}
        />
        <DialogContent>
          <Stack spacing={3} mt={3}>
            <TextField
              name="name"
              label="Task Name"
              validators={validatorRequired}
              control={control}
              errorMessage={errors.name?.message}
              fullWidth
            />

            <TextField
              name="description"
              label="Task Description"
              validators={validatorRequired}
              control={control}
              errorMessage={errors.description?.message}
              multiline
              fullWidth
            />

            <Dropdown
              name="status"
              label="Task Status"
              validators={validatorRequired}
              control={control}
              errorMessage={errors.status?.message}
              options={taskStatusOptions}
            />

            <Dropdown
              name="complexity"
              label="Task Complexity"
              validators={validatorRequired}
              control={control}
              errorMessage={errors.complexity?.message}
              options={taskComplexityOptions}
            />

            <DatePicker
              name="dueDate"
              label="Due Date"
              control={control}
              errorMessage={errors.dueDate?.message}
            />

            <ImagePicker
              name="imageUrl"
              imageAlt="Task Image"
              control={control}
              errorMessage={errors.imageUrl?.message}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <LoadingButton
            loading={isUpdatingTask}
            onClick={handleSubmit(onSubmit)}
          >
            {updateButtonText}
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <DeletionConfirmationDialog
        isOpen={isConfirmationAlertOpen}
        entityType="task"
        onCancel={() => setIsConfirmationAlertOpen(false)}
        onConfirm={onDelete}
      />
    </>
  );
};

export default TaskDialog;
