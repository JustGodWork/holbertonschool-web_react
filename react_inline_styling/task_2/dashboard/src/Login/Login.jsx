import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from '../HOC/WithLogging';

const styles = StyleSheet.create({
  body: {
    padding: '40px 30px',
    minHeight: '200px',
  },
  p: {
    fontSize: '1.2rem',
  },
  form: {
    marginTop: '20px',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    marginLeft: '5px',
    marginRight: '10px',
    padding: '3px 6px',
  },
  button: {
    padding: '3px 12px',
    background: '#e1003c',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginLeft: '10px',
  },
});

function Login() {
  return (
    <div className={css(styles.body)} >
      <p className={css(styles.p)}>Login to access the full dashboard</p>

      <form className={css(styles.form)}>
        <label htmlFor='email' className={css(styles.label)} onClick={() => emailRef.current && emailRef.current.focus()}>Email:</label>
        <input id='email' name='email' type='email' className={css(styles.input)} ref={emailRef} />

        <label htmlFor='password' className={css(styles.label)} onClick={() => passwordRef.current && passwordRef.current.focus()}>Password:</label>
        <input id='password' name='password' type='password' className={css(styles.input)} role="textbox" ref={passwordRef} />

        <button type='submit' className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
}

export default WithLogging(Login);
