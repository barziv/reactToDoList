import React from "react";
import PropTypes from 'prop-types';
import AddButton from "../../Components/AddButton/AddButton";
import './FloatyButtons.css';

function FloatyButtons(props) {
  return (
    <div className='floaty-buttons'>
      <AddButton onAddingAssignment={props.onAddingAssignment}/>
    </div>
  );
}

FloatyButtons.propTypes = {
  onAddingAssignment: PropTypes.func
}

export default FloatyButtons;
