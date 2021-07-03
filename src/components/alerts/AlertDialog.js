import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
    const {handleGoBack, handleConfirm, handleClose, open} = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              If you move from this page without saving, your entries will be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
          <Button onClick={handleGoBack} color="primary" autoFocus>
            Go Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
