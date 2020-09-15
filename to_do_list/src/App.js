import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddButton from './Components/AddButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To Do List
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AddButton />
    </div>
  );
}

export default App;
