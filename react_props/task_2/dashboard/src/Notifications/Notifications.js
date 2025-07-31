import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications({ notifications = [] }) {
  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.map((notif) => (
          <NotificationItem
            key={notif.id}
            type={notif.type}
            value={notif.value}
            html={notif.value && notif.value.startsWith('<') ? notif.value : undefined}
          />
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
