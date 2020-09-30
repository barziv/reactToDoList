import React from 'react';
import Assignment from './Assignment';
import '../Style/AssignmentsList.css';

function AssignmentsList(props) {
    return (
        <ul className="assignmentsList">
            {Object.entries(props.data).map((item) => {
                return (
                    <li key={item[0]}>
                        <Assignment id={item[0]} isDone={item[1]['done']} changeItem={props.change} delete={props.delete}>
                            {item[1]['assignment']}
                        </Assignment>
                    </li>
                )
            })}
        </ul>
    )
}

export default AssignmentsList;