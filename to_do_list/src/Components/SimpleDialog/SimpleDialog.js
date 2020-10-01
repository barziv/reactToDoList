import React from "react";
import PropTypes from "prop-types";
import "./SimpleDialog.css";

function SimpleDialog(props) {
  const handleClose = shouldUpdate => {
    props.onDialogClose(shouldUpdate, selectedValue);
  };

  let selectedValue = "";
  return (
    <div className="dialog" onClose={handleClose}>
      <div className="dialog-box">
        <div className="dialog-title"> {props.title} </div>
        <input className="dialog-input" onChange={event => (selectedValue = event.target.value)} />
        <button className="dialog-button" onClick={() => handleClose(true)}>
          {props.action}
        </button>
        <button className="dialog-button" onClick={() => handleClose(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

SimpleDialog.propTypes = {
  title: PropTypes.string,
  action: PropTypes.string,
  onDialogClose: PropTypes.func
};

export default SimpleDialog;
