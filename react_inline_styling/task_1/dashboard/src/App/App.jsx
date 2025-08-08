import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from "../utils/utils";

const styles = StyleSheet.create({
  appBody: {
    padding: '40px 30px',
    minHeight: '200px',
  },
  appFooter: {
    width: '100%',
    borderTop: '3px solid #e1003c',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    background: '#fff',
    padding: '15px 0',
  },
  appFooterP: {
    margin: 0,
    fontSize: '1rem',
    color: '#333',
  },
});

class App extends React.Component {
  static defaultProps = {
    logOut: () => {},
    isLoggedIn: false,
  };

  handleKeyDown = (e) => {
    if (e.ctrlKey && (e.key === 'h' || e.key === 'H')) {
      window.alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { isLoggedIn } = this.props;

    const notificationsList = [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: getLatestNotification()
      }
    ];

    const coursesList = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    return (
      <Fragment>
        <div className='root-notifications'>
          <Notifications notifications={notificationsList} />
        </div>
        <div className='App-header'>
          <img className='holberton-logo' src={holbertonLogo} alt='holberton logo' />
          <h1>School Dashboard</h1>
        </div>
        <BodySectionWithMarginBottom title={isLoggedIn ? 'Course list' : 'Log in to continue'}>
          {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>
        <div className={css(styles.appFooter)}>
          <p className={css(styles.appFooterP)}>Copyright {getCurrentYear()} - {getFooterCopy()}</p>
        </div>
      </Fragment>
    );
  }
}

export default App;
