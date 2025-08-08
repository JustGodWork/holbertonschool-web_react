import React from 'react';

const headerStyle = { backgroundColor: '#deb5b545' };
const rowStyle = { backgroundColor: '#f5f5f5ab' };

function CourseListRow({ isHeader = false, textFirstCell = "", textSecondCell = null }) {
    if (isHeader === true) {
        if (textSecondCell === null) {
            return (
                <tr style={headerStyle}>
                    <th colSpan="2">{textFirstCell}</th>
                </tr>
            );
        } else {
            return (
                <tr style={headerStyle}>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else {
        if (textSecondCell === null) {
            return (
                <tr style={rowStyle}>
                    <td style={{ textAlign: 'center' }}>{textFirstCell}</td>
                    <td style={{ border: 'none', width: '0%'} }></td>
                </tr>
            );
        } else {
            return (
                <tr style={rowStyle}>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </tr>
            );
        }
    }
}

export default CourseListRow;
