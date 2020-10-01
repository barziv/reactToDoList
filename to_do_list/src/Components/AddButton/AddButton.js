import React, { useState } from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SimpleDialog from "../SimpleDialog/SimpleDialog";
import "./AddButton.css";

function AddButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (shouldAdd, value) => {
    if (shouldAdd) {
      props.onAddingAssignment(uuid(), false, value);
    }
    setIsOpen(false);
  };

  return (
    <div className="add-button-box">
      <FontAwesomeIcon 
        icon={faPlus}
        className="add-button" 
        onClick={handleOpen}
      />
      {isOpen && (
        <SimpleDialog
          onDialogClose={handleClose}
          title="Add Assignment"
          action="Add"
        />
      )}
    </div>
  );
}

AddButton.propTypes = {
  onAddingAssignment: PropTypes.func
};

export default AddButton;
