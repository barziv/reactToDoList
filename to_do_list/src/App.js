import React, { useState, useEffect } from "react";
import AssignmentsList from "./Containers/AssignmentsList/AssignmentsList";
import Header from "./Components/Header/Header";
import FloatyButtons from "./Containers/FloatyButtons/FloatyButtons";
import {
  saveToLocalStorage,
  loadFromLocalStorage
} from "./Storage/LocalStorageManager";
import config from "./config";

function App() {
  const [assignments, setAssignments] = useState({});

  const changeAssignment = (id, status, description) => {
    setAssignments(currentAssignments => {
      currentAssignments[id] = {
        status: status,
        description: description
      };
      saveToLocalStorage(config.STORAGE_KEY, currentAssignments);
      return { ...currentAssignments };
    });
  };

  const deleteAssignment = id => {
    setAssignments(currentAssignments => {
      delete currentAssignments[id];
      saveToLocalStorage(config.STORAGE_KEY, currentAssignments);
      return { ...currentAssignments };
    });
  };

  useEffect(() => {
    setAssignments(loadFromLocalStorage(config.STORAGE_KEY));
  }, []);

  return (
    <div className="App">
      <Header text="To Do List" />
      <AssignmentsList
        assignmentObject={assignments}
        onAssignmentChanged={changeAssignment}
        onAssignmentDeleted={deleteAssignment}
      />
      <FloatyButtons onAddingAssignment={changeAssignment} />
    </div>
  );
}

export default App;
