import React from "react";
import PropTypes from 'prop-types';
import AddButton from "../Components/AddButton";
import '../Style/DownButtons.css';

function DownButtons(props) {
  return (
    <div className='downButtons'>
      <AddButton add={props.add}/>
    </div>
  );
}

DownButtons.propTypes = {
  add: PropTypes.func
}

export default DownButtons;
