import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WarningIcon from '@mui/icons-material/Warning';
import { HorizontalCenteredStack } from '@/components/layout';

interface DeletionConfirmationDialog {
  isOpen: boolean;
  entityType: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeletionConfirmationDialog = (props: DeletionConfirmationDialog) => {
  const { isOpen, entityType, onCancel, onConfirm } = props;

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Confirm deletion of this {entityType}</DialogTitle>
      <DialogContent>
        <HorizontalCenteredStack spacing={1}>
          <WarningIcon color="error" />
          <Typography color="grey.500">
            All data related to this {entityType} will be lost.
          </Typography>
        </HorizontalCenteredStack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletionConfirmationDialog;
