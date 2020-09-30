import React from "react";
import PropTypes from "prop-types";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SimpleDialog from "./SimpleDialog";
import "../Style/Assignment.css";

function Assignment(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (shouldUpdate, value) => {
    if (shouldUpdate) {
      props.changeItem(props.id, props.isDone, value);
    }
    setOpen(false);
  };

  return (
    <div>
      <div className="box">
        <input
          type="checkbox"
          className="checkbox"
          checked={props.isDone}
          onChange={() => {
            props.changeItem(props.id, !props.isDone, props.children);
          }}
          id={props.id}
        />
        <label htmlFor={props.id} className="assignmentLabel">
          {props.children}
        </label>
        <EditIcon onClick={handleClickOpen} />
        <DeleteForeverIcon onClick={() => props.delete(props.id)} />
      </div>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        title="Change Assignment"
        action="Change"
      />
    </div>
  );
}

Assignment.propTypes = {
  id: PropTypes.string,
  isDone: PropTypes.bool,
  changeItem: PropTypes.func
};

export default Assignment;
