import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: '40px',
  },
});

function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className={css(styles.marginBottom)}>
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
}

export default BodySectionWithMarginBottom;
