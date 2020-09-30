import React from "react";
import uuid from 'react-uuid';
import AddIcon from "@material-ui/icons/Add";
import SimpleDialog from './SimpleDialog';
import '../Style/AddButton.css';

function AddButton(props) {
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
    <div className='addButtonBox'>
      <AddIcon className='addButton' onClick={handleClickOpen} />
      <SimpleDialog open={open} onClose={handleClose} title="Add Assignment" action="Add"/>
    </div>
  );
}

export default AddButton;