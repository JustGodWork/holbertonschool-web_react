import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password" style={{ marginLeft: '10px' }}>Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit" style={{ marginLeft: '10px' }}>OK</button>
      </form>
    </div>
  );
}

export default Login;
