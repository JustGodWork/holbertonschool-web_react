import React, { Fragment } from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import '../App/App.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  render() {
    const { isLoggedIn = false } = this.props;

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
        <div className='App-body'>
          {isLoggedIn ? (
            <CourseList courses={coursesList} />
          ) : (
            <Login />
          )}
        </div>
        <div className='App-footer'>
          <p>Copyright {getCurrentYear()} - {getFooterCopy()}</p>
        </div>
      </Fragment>
    );
  }
}

export default App;
