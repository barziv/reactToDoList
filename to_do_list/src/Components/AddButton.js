import React from "react";
import uuid from 'react-uuid';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import SimpleDialog from './SimpleDialog';

export default function AddButton(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (shouldAdd, value) => {
    if (shouldAdd){
      props.add(uuid(), false, value);
    }
    setOpen(false);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={handleClickOpen} />
      </Fab>
      <SimpleDialog open={open} onClose={handleClose} title="Add Assignment" action="Add"/>
    </div>
  );
}
