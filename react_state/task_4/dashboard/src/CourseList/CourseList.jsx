import CourseListRow from './CourseListRow';
import { StyleSheet, css} from 'aphrodite';


function CourseList({ courses = [] }) {
	if (courses.length === 0) {
		return (
			<div className={css(styles.container)}>
				<table className={css(styles.table)}>
					<tbody>
						<CourseListRow textFirstCell="No course available yet" textSecondCell={null} />
					</tbody>
				</table>
			</div>
		);
	}
	return (
		<table className={css(styles.table)}>
			<thead>
				<CourseListRow textFirstCell="Available courses" isHeader={true} />
				<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
			</thead>
			<tbody>
				{courses.map(course => (
					<CourseListRow
						key={course.id}
						textFirstCell={course.name}
						textSecondCell={course.credit}
					/>
				))}
			</tbody>
		</table>
	)
}
const styles = StyleSheet.create({
	container: {
		marginTop: '40px',
		display: 'flex',
		justifyContent: 'center',
	},
	table: {
		border: '1px solid',
		borderCollapse: 'collapse',
		width: '80%',
		maxWidth: '800px',
		marginLeft: 'auto',
		marginRight: 'auto',
	}
});


export default CourseList;