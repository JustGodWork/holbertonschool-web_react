import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySection: {
    margin: '20px 0',
    padding: '20px',
    background: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
  },
  h2: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#e1003c',
  },
});

function BodySection({ title, children }) {
  return (
    <div className={css(styles.bodySection)}>
      <h2 className={css(styles.h2)}>{title}</h2>
      {children}
    </div>
  );
}

export default BodySection;
