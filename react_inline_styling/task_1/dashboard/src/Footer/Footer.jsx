import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    borderTop: '3px solid #e1003c',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    background: '#fff',
    padding: '15px 0',
  },
  p: {
    margin: 0,
    fontSize: '1rem',
    color: '#333',
  },
});

function Footer() {
  return (
    <div className={css(styles.footer)}>
      <p className={css(styles.p)}>{getFooterCopy(true)} - {getCurrentYear()}</p>
    </div>
  );
}

export default Footer;
