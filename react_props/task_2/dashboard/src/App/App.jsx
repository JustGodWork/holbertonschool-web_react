import React, { Fragment } from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import '../App/App.css';
import { getCurrentYear, getFooterCopy, getLatestNotification } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  const notificationsList = [
    {
      id: 1,
      type: 'default',
      value: 'New course available'
    },
    {
      id: 2,
      type: 'urgent',
      value: 'New resume available'
    },
    {
      id: 3,
      type: 'urgent',
      value: getLatestNotification()
    },
  ];

  return (
    <Fragment>
      <Notifications notifications={notificationsList} />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
