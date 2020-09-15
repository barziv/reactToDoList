import React from "react";
import { Fab } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import config from '../config';

function SaveButton(props) {
  const saveToLocalStorage = () => {
    console.log(props.data);
    localStorage.setItem(config.LOCAL_STORAGE_KEY, JSON.stringify(props.data));
  }

  return (
    <Fab color="secondary" onClick={saveToLocalStorage}>
      <SaveAltIcon />
    </Fab>
  );
}

export default SaveButton;
