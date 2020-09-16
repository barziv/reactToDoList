import React from "react";
import { useDispatch } from 'react-redux';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import SimpleDialog from './SimpleDialog';
import add from '../actions/addNewAssignment';

export default function AddButton(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (shouldAdd, value) => {
    if (shouldAdd){
      dispatch(add(value));
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
