import React from "react";
import PropTypes from "prop-types";
import Assignment from "../../Components/Assignment/Assignment";
import "./AssignmentsList.css";

function AssignmentsList(props) {
  return (
    <ul className="assignments-list">
      {Object.entries(props.assignmentObject).map(item => {
        return (
          <li key={item[0]} className='assignment-item'>
            <Assignment
              id={item[0]}
              status={item[1].status}
              description={item[1].description}
              onAssignmentChanged={props.onAssignmentChanged}
              onAssignmentDeleted={props.onAssignmentDeleted}
            />
          </li>
        );
      })}
    </ul>
  );
}

AssignmentsList.propTypes = {
  assignmentObject: PropTypes.object,
  onAssignmentChanged: PropTypes.func,
  onAssignmentDeleted: PropTypes.func
};

export default AssignmentsList;
