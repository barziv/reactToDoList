import React from "react";
import { useDispatch } from 'react-redux';
import update from '../actions/updateAssignment';
import deleteAssignment from '../actions/deleteAssignment';
import { FormControlLabel, Checkbox, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SimpleDialog from "./SimpleDialog";

function Assignment(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (shouldUpdate, value) => {
    if(shouldUpdate) {
        dispatch(update(props.id, props.isDone, value));
    }
    setOpen(false);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.isDone}
            onChange={() => {
              dispatch(update(props.id, !props.isDone, props.children));
            }}
            indeterminate
          />
        }
        label={props.children}
      />
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => {
          dispatch(deleteAssignment(props.id));
        }}>
        <DeleteForeverIcon />
      </IconButton>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        title="Change Assignment"
        action="Change"
      />
    </div>
  );
}

export default Assignment;
