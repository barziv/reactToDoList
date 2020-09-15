import React, { useState } from "react";
import "./App.css";
import AssignmentsList from "./Components/List";
import Header from "./Components/Header";
import DownButtons from "./Containers/buttons";

function App() {
  const [assignments, setAssignments] = useState({});

  const changeAssignment = (id, isDone, label) => {
    setAssignments({...assignments,
      [id]: {
        'done': isDone,
        'assignment': label
      }
    });
  };

  const deleteAssignment = id => {
    setAssignments(curr => {
      delete curr[id];
      let newAssignments = {};
      Object.assign(newAssignments, curr);
      return newAssignments;
    });
  };

  return (
    <div className="App">
      <Header>To Do List</Header>
      <AssignmentsList
        data={assignments}
        change={changeAssignment}
        delete={deleteAssignment}
      />
      <DownButtons add={changeAssignment} />
    </div>
  );
}

export default App;
