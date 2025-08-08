import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from '../HOC/WithLogging';

const styles = StyleSheet.create({
  body: {
    padding: '40px 30px',
    minHeight: '200px',
    '@media (max-width: 900px)': {
      padding: '20px 5px',
    },
  },
  p: {
    fontSize: '1.2rem',
    '@media (max-width: 900px)': {
      fontSize: '1rem',
    },
  },
  form: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '2px',
    fontSize: '1rem',
  },
  input: {
    marginLeft: 0,
    marginRight: 0,
    padding: '3px 6px',
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '1rem',
  },
  button: {
    padding: '8px 0',
    background: '#e1003c',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
    fontSize: '1rem',
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
