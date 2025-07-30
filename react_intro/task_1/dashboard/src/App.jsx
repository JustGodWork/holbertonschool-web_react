import React from 'react';
import './App.css';
import logo from './holberton-logo.jpg';
import Notifications from './Notifications';
import { getCurrentYear, getFooterCopy } from './utils';

function App() {
  return (
    <div>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>{getFooterCopy(true)} - {getCurrentYear()}</p>
      </div>
    </div>
  );
}

export default App;
