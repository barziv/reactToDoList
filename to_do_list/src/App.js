import React, { useState, useEffect } from "react";
import AssignmentsList from "./Components/AssignmentsList";
import Header from "./Components/Header";
import DownButtons from "./Containers/DownButtons";
import config from './config';
import storageManager from './StorageManager';

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
      return {...curr};
    });
  };

  useEffect(() => {
    setAssignments(storageManager.load(config.STORAGE_KEY) ?? {});
  }, []);

  return (
    <div className="App">
      <Header>To Do List</Header>
      <AssignmentsList
        data={assignments}
        change={changeAssignment}
        delete={deleteAssignment}
      />
      <DownButtons data={assignments} add={changeAssignment} />
    </div>
  );
}

export default App;
