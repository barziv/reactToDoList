import React from "react";
import { Fab } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

function SaveButton() {
  return (
    <Fab color="secondary" aria-label="add">
      <SaveAltIcon />
    </Fab>
  );
}

export default SaveButton;
