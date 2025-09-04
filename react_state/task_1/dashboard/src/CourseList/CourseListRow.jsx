import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader = false, textFirstCell = "", textSecondCell = null }) {
	const rowStyle = isHeader ? styles.headerRow : styles.row;

	if (isHeader) {
		if (textSecondCell === null) {
			return (
				<tr className={css(rowStyle)}>
					<th colSpan="2" className={css(styles.cellCenter)}>{textFirstCell}</th>
				</tr>
			);
		}
		return (
			<tr className={css(rowStyle)}>
				<th className={css(styles.cell)}>{textFirstCell}</th>
				<th className={css(styles.cell)}>{textSecondCell}</th>
			</tr>
		);
	} else {
		return (
			<tr className={css(rowStyle)}>
				<td className={css(styles.cell)}>{textFirstCell}</td>
				<td className={css(styles.cell)}>{textSecondCell}</td>
			</tr>
		);
	}
}

const styles = StyleSheet.create({
	headerRow: {
		backgroundColor: '#deb5b545'
	},
	row: {
		backgroundColor: '#f5f5f5ab'
	},
	cell: {
		border: '1px solid',
		padding: '0.4rem',
		textAlign: 'left'
	},
	cellCenter: {
		border: '1px solid',
		padding: '0.4rem',
		textAlign: 'center',
		fontWeight: 'bold'
	}
});

export default CourseListRow;
