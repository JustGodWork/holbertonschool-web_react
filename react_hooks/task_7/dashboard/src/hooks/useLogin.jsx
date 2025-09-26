import { useState } from 'react';

const useLogin = (onLogin) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const emailOk = newEmail.length > 0 && validateEmail(newEmail);
    const passwordOk = password.length >= 8;
    setEnableSubmit(emailOk && passwordOk);
  };

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const emailOk = email.length > 0 && validateEmail(email);
    const passwordOk = newPassword.length >= 8;
    setEnableSubmit(emailOk && passwordOk);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (onLogin && typeof onLogin === 'function') {
      onLogin(email, password);
    }
  };

  return {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  };
};

export default useLogin;
