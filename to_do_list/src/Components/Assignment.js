import React from "react";
import { FormControlLabel, Checkbox, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SimpleDialog from "./SimpleDialog";

function Assignment(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (shouldUpdate, value) => {
    if(shouldUpdate) {
        props.changeItem(props.id, props.isDone, value);
    }
    setOpen(false);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.isDone}
            onChange={() =>
              props.changeItem(props.id, !props.isDone, props.children)
            }
            indeterminate
          />
        }
        label={props.children}
      />
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => props.delete(props.id)}>
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
