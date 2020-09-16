import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import "./App.css";
import AssignmentsList from "./Components/List";
import Header from "./Components/Header";
import DownButtons from "./Containers/buttons";
import config from './config';
import storageManager from './StorageManager';
import load from './actions/loadAssignments';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load(storageManager.load(config.STORAGE_KEY) ?? {}));
  }, []);

  return (
    <div className="App">
      <Header>To Do List</Header>
      <AssignmentsList />
      <DownButtons />
    </div>
  );
}

export default App;
