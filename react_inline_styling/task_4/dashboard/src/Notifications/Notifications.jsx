import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { keyframes } from 'aphrodite';
import NotificationItem from './NotificationItem';
import closeButton from "../assets/close-button.png";

const opacityAnim = keyframes({
  'from': { opacity: 0.5 },
  'to': { opacity: 1 },
});

const bounceAnim = keyframes({
  '0%': { transform: 'translateY(0px)' },
  '25%': { transform: 'translateY(-5px)' },
  '50%': { transform: 'translateY(5px)' },
  '75%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(0px)' },
});

const styles = StyleSheet.create({
  menuItem: {
    float: 'right',
    background: '#fff8f8',
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '4px',
    fontWeight: 'bold',
    position: 'relative',
    zIndex: 10000,
    ':hover': {
      animationName: [opacityAnim, bounceAnim],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
  },
  notifications: {
    position: 'relative',
    border: '2px dashed #e1003c',
    padding: '20px 0 20px 0',
    margin: '20px 0 30px 0',
    background: '#fff8f8',
    color: '#e1003c',
    fontSize: '20px',
    maxWidth: '600px',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      margin: 0,
      maxWidth: '100vw',
      zIndex: 9999,
      fontSize: '20px',
      border: 'none',
      background: '#fff8f8',
      padding: 0,
    },
  },
  p: {
    margin: '0 0 10px 0',
    fontWeight: 'bold',
    fontSize: '20px',
    '@media (max-width: 900px)': {
      fontSize: '20px',
    },
  },
  ul: {
    margin: 0,
    paddingLeft: 0,
    listStyle: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  closeIcon: {
    width: '15px',
    height: '15px',
  },
});

class Notifications extends React.Component {
  state = { displayDrawer: false };

  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  handleMenuClick = () => {
    this.setState({ displayDrawer: true });
  };

  handleClose = () => {
    this.setState({ displayDrawer: false });
  };

  render() {
    const { notifications = [] } = this.props;
    const { displayDrawer } = this.state;
    let drawerContent = null;

    if (displayDrawer) {
      let content = "No new notification for now";

      if (notifications.length > 0) {
        const items = notifications.map(notification => {
          if (notification.html) {
            return (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                html={notification.html}
                markAsRead={this.markAsRead}
            />
            );
          }
          return (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              type={notification.type}
              value={notification.value}
              markAsRead={this.markAsRead}
            />
          );
        });

        content = (
          <>
            <p className={css(styles.p)}>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>{items}</ul>
          </>
        );
      }

      drawerContent = (
        <div className={css(styles.notifications)}>
          <button
            className={css(styles.closeButton)}
            aria-label="Close"
            onClick={this.handleClose}
          >
            <img
              src={closeButton}
              alt="close"
              className={css(styles.closeIcon)}
            />
          </button>
          {content}
        </div>
      );
    }

    return (
      <>
        {!displayDrawer && (
          <div
            className={css(styles.menuItem)}
            onClick={this.handleMenuClick}
            data-testid="menu-item"
          >
            Your notifications
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button onClick={this.handleClose} style={{ position: 'absolute', top: 10, right: 10 }}>Close</button>
            <p>Here is the list of notifications</p>
            <ul>
              {notifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  id={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.value && notif.value.startsWith('<') ? notif.value : undefined}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Notifications;
