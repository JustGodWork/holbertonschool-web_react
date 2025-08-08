import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import closeButton from "../assets/close-button.png";

const styles = StyleSheet.create({
  notifications: {
    position: 'relative',
    border: '2px dashed #e1003c',
    padding: '20px 40px 20px 20px',
    margin: '20px 0 30px 0',
    background: '#fff8f8',
    color: '#e1003c',
    fontSize: '1.1rem',
    maxWidth: '600px',
  },
  p: {
    margin: '0 0 10px 0',
    fontWeight: 'bold',
  },
  ul: {
    margin: 0,
    paddingLeft: '20px',
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
  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications = [], displayDrawer = false } = this.props;
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
            onClick={() => console.log('Close button has been clicked')}
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
      <div className="root-notifications">
        <div className="notification-container">
          <div className="notifications-title">Your notifications</div>
          {drawerContent}
        </div>
      </div>
    )
  }
}

export default Notifications;
