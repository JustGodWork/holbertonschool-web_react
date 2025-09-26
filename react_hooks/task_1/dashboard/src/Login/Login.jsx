import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = ({ logIn = () => {} }) => {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const styles = StyleSheet.create({
    AppBody: {
      padding: '2rem',
      flex: 1,
    },
    AppBodyP: {
      marginBottom: '1rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '1rem',
      '@media (max-width: 900px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.5rem',
      },
    },
    formInput: {
      padding: '0 0.25rem',
    },
    formButton: {
      padding: '0 0.25rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setFormData(prev => ({ ...prev, email }));
    const emailOk = email.length > 0 && validateEmail(email);
    const passwordOk = formData.password.length >= 8;
    setEnableSubmit(emailOk && passwordOk);
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setFormData(prev => ({ ...prev, password }));
    const emailOk = formData.email.length > 0 && validateEmail(formData.email);
    const passwordOk = password.length >= 8;
    setEnableSubmit(emailOk && passwordOk);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(formData.email, formData.password);
  };

  return (
    <div className={css(styles.AppBody)}>
      <p className={css(styles.AppBodyP)}>Login to access the full dashboard</p>
      <form role="form" aria-label="login form" className={css(styles.form)} onSubmit={handleLoginSubmit}>
        <label
          htmlFor="email"
          onClick={() => emailRef.current && emailRef.current.focus()}
        >
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          ref={emailRef}
          className={css(styles.formInput)}
          value={formData.email}
          onChange={handleChangeEmail}
        />
        <label
          htmlFor="password"
          onClick={() => passwordRef.current && passwordRef.current.focus()}
        >
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          role="textbox"
          ref={passwordRef}
          className={css(styles.formInput)}
          value={formData.password}
          onChange={handleChangePassword}
        />
        <input
          type="submit"
          value="OK"
          className={css(styles.formButton)}
          disabled={!enableSubmit}
        />
      </form>
    </div>
  );
};

export default Login;
