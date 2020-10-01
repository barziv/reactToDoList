import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import SimpleDialog from "../SimpleDialog/SimpleDialog";
import "./Assignment.css";

function Assignment(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (shouldUpdate, value) => {
    if (shouldUpdate) {
      props.onAssignmentChanged(props.id, props.status, value);
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="box">
        <input
          type="checkbox"
          className="checkbox"
          checked={props.status}
          onChange={() => {
            props.onAssignmentChanged(props.id, !props.status, props.description);
          }}
          id={props.id}
        />
        <label htmlFor={props.id} className="assignment-label">
          {props.description}
        </label>
        <FontAwesomeIcon 
          icon={faEdit} 
          className="assignment-icon"
          onClick={handleOpen}
        />
        <FontAwesomeIcon 
          icon={faTrashAlt} 
          className="assignment-icon"
          onClick={() => props.onAssignmentDeleted(props.id)}
        />
      </div>
      {isOpen && (
        <SimpleDialog
          onDialogClose={handleClose}
          title="Change Assignment"
          action="Change"
        />
      )}
    </>
  );
}

Assignment.propTypes = {
  id: PropTypes.string,
  status: PropTypes.bool,
  description: PropTypes.string,
  onAssignmentChanged: PropTypes.func,
  onAssignmentDeleted: PropTypes.func
};

export default Assignment;
