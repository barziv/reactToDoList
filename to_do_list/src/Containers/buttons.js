import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SaveButton from "../Components/SaveButton";
import AddButton from "../Components/AddButton";

const useStyles = makeStyles({
    buttons: {
        display: 'flex',
        position: 'fixed',
        bottom: '1vh',
        right: '0vh',
    }
  })

function DownButtons() {
  const classes = useStyles();
  return (
    <div className={classes.buttons}>
      <AddButton />
      <SaveButton />
    </div>
  );
}

export default DownButtons;
