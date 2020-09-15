import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";

export default function SimpleDialog(props) {
    const { onClose, open, title, action } = props;
  
    const handleClose = (shouldUpdate) => {
      onClose(shouldUpdate, selectedValue);
    };
  
    let selectedValue = "";
    return (
      <Dialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Details"
            type="text"
            onChange={(event) => selectedValue=event.target.value}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} color="primary">
            {action}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
