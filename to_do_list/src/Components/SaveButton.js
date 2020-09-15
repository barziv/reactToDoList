import React from "react";
import { Fab } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import config from '../config';
import storageManager from '../StorageManager';

function SaveButton(props) {
  const saveToLocalStorage = () => {
    storageManager.save(config.STORAGE_KEY, props.data);
  }

  return (
    <Fab color="secondary" onClick={saveToLocalStorage}>
      <SaveAltIcon />
    </Fab>
  );
}

export default SaveButton;
