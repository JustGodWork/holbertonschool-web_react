import React, { useEffect, useCallback, useReducer } from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';
import { getLatestNotification } from '../utils/utils';
import { appReducer, initialState, APP_ACTIONS } from './appReducer';

const LoginWithLogging = WithLogging(Login);
const CourseListWithLogging = WithLogging(CourseList);

const styles = StyleSheet.create({
  reset: {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      scrollBehavior: 'smooth',
    },
    '*::before': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    '*::after': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
  },
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    flex: 1,
    padding: '20px',
  },
  footer: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 200,
    fontStyle: 'italic',
    borderTop: '0.25rem solid #e1003c',
  },
});

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const resetCSS = `
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
      }

      #root {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
    `;

    const style = document.createElement('style');
    style.textContent = resetCSS;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/notifications.json');
        dispatch({
          type: APP_ACTIONS.SET_NOTIFICATIONS,
          payload: { notifications: response.data }
        });
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/courses.json');
        dispatch({
          type: APP_ACTIONS.SET_COURSES,
          payload: { courses: response.data }
        });
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [state.user]);

  const logIn = useCallback((email, password) => {
    dispatch({
      type: APP_ACTIONS.LOGIN,
      payload: { email, password }
    });
  }, []);

  const logOut = useCallback(() => {
    dispatch({ type: APP_ACTIONS.LOGOUT });
  }, []);

  const handleDisplayDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  }, []);

  const handleHideDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    dispatch({
      type: APP_ACTIONS.MARK_NOTIFICATION_READ,
      payload: { id }
    });
  }, []);

  return (
    <div className={css(styles.app)}>
      <Notifications
        notifications={state.notifications}
        displayDrawer={state.displayDrawer}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        markNotificationAsRead={markNotificationAsRead}
      />

      <Header user={state.user} logOut={logOut} />

      <div className={css(styles.body)}>
        {state.user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseListWithLogging courses={state.courses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <LoginWithLogging
              logIn={logIn}
              email={state.user.email}
              password={state.user.password}
            />
          </BodySectionWithMarginBottom>
        )}

        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>
      </div>

      <div className={css(styles.footer)}>
        <Footer user={state.user} />
      </div>
    </div>
  );
};

export default App;
