import React, { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-button.png";

class Notifications extends PureComponent {
  static defaultProps = {
    notifications: [],
    displayDrawer: false,
    markNotificationAsRead: (id) => console.log(`Notification ${id} has been marked as read`),
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
  };

  render() {
    const {
      notifications,
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    const drawerContent = displayDrawer && (
      <div className={css(styles.notifications)}>
        <button
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Close"
          onClick={handleHideDrawer}
        >
          <img
            src={closeButton}
            alt="close"
            style={{ width: "15px", height: "15px" }}
          />
        </button>

        {notifications.length > 0 ? (
          <>
            <p>Here is the list of notifications</p>
            <ul>
              {notifications.map((n) => (
                <NotificationItem
                  key={n.id}
                  id={n.id}
                  type={n.type}
                  value={n.value}
                  html={n.html}
                  markAsRead={markNotificationAsRead}
                />
              ))}
            </ul>
          </>
        ) : (
          <p>No new notification for now</p>
        )}
      </div>
    );

    return (
      <div className={css(styles.rootNotifications)}>
        <div className={css(styles.notificationContainer)}>
          <div className={css(styles.title)} onClick={handleDisplayDrawer}>
            Your notifications
          </div>
          {drawerContent}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  rootNotifications: {
    position: "relative",
  },
  notificationContainer: {
    position: "relative",
    width: "200px",
  },
  title: {
    fontWeight: "bold",
    cursor: "pointer",
  },
  notifications: {
    display: "flex",
    flexDirection: "column",
    border: "2px dotted #e1003c",
    paddingLeft: "15px",
    height: "150px",
    "@media (max-width: 900px)": {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      padding: 0,
      fontSize: "20px",
      backgroundColor: "white",
      zIndex: 9999,
    },
    'li[data-priority="default"]': {
      color: "blue",
    },
    'li[data-priority="urgent"]': {
      color: "#e1003c !important",
    },
  },
});

export default Notifications;
