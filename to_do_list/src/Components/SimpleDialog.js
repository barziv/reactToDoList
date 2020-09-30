import React from "react";
import "../Style/SimpleDialog.css";

function SimpleDialog(props) {
  const { onClose, open, title, action } = props;

  const handleClose = shouldUpdate => {
    onClose(shouldUpdate, selectedValue);
  };

  let selectedValue = "";
  return (
    <dialog className="dialog" open={open} onClose={handleClose}>
      <div className="dialogBox">
        <h1 className="dialogTitle"> {title} </h1>
        <input onChange={event => (selectedValue = event.target.value)} />
        <button className="dialogButton" onClick={() => handleClose(true)}>
          {action}
        </button>
        <button className="dialogButton" onClick={() => handleClose(false)}>
          Cancel
        </button>
      </div>
    </dialog>
  );
}

export default SimpleDialog;
