import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  regularRow: {
    backgroundColor: '#f5f5f5ab',
  },
  th: {
    fontWeight: 'bold',
    padding: '8px',
    border: '1px solid #ccc',
  },
  td: {
    padding: '8px',
    border: '1px solid #ccc',
  },
});

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(styles.headerRow)}>
          <th colSpan={2} className={css(styles.th)}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.headerRow)}>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </tr>
      );
    }
  }
  return (
    <tr className={css(styles.regularRow)}>
      <td className={css(styles.td)}>{textFirstCell}</td>
      <td className={css(styles.td)}>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
