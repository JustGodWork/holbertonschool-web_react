import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import WithLogging from '../HOC/WithLogging';

const styles = StyleSheet.create({
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  th: {
    border: '1px solid #ccc',
    padding: '8px',
    background: '#deb5b545',
  },
  td: {
    border: '1px solid #ccc',
    padding: '8px',
    background: '#f5f5f5ab',
  },
});

class CourseList extends React.Component {
    render() {
        const { courses = [] } = this.props;

        return (
            <div className='CourseListContainer'>
                <table className={css(styles.table)} id="CourseList">
                    <thead>
                        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
                    </thead>
                    <tbody>
                        {courses.length === 0 ? (
                            <CourseListRow textFirstCell="No course available yet" />
                        ) : (
                            courses.map(course => (
                                <CourseListRow
                                    key={course.id}
                                    textFirstCell={course.name}
                                    textSecondCell={course.credit}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WithLogging(CourseList);
