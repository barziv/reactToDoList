import React from "react";
import { useSelector } from 'react-redux';
import { Fab } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import config from '../config';
import storageManager from '../StorageManager';

function SaveButton() {
  const data = useSelector(state => state);

  const saveToLocalStorage = () => {
    storageManager.save(config.STORAGE_KEY, data);
  }

  return (
    <Fab color="secondary" onClick={saveToLocalStorage}>
      <SaveAltIcon />
    </Fab>
  );
}

export default SaveButton;
