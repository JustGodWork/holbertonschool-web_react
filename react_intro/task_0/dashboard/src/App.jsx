import React, { useState } from 'react';
import './App.css';
import logo from './assets/holberton-logo.jpg';

function App() {
  const [count, setCount] = useState(0)
  const year = new Date().getFullYear();

  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {year} - holberton School</p>
      </div>
    </>
  );
}

export default App;
