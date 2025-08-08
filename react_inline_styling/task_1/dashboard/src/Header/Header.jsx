import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottom: '3px solid #e1003c',
    padding: '30px 0 30px 30px',
  },
  logo: {
    height: '200px',
    width: '200px',
    marginRight: '30px',
  },
  h1: {
    color: '#e1003c',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={holbertonLogo} className={css(styles.logo)} alt="holberton logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
}

export default Header;
