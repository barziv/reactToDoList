import React from "react";
import AddButton from "../Components/AddButton";
import '../Style/DownButtons.css';

function DownButtons(props) {
  return (
    <div className='downButtons'>
      <AddButton add={props.add}/>
    </div>
  );
}

export default DownButtons;
