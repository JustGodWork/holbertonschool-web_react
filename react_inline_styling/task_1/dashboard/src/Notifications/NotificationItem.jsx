import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

class NotificationItem extends React.PureComponent {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    if (markAsRead) {
      markAsRead(id);
    }
  };

  render() {
    const { type = 'default', html, value } = this.props;
    const styleClass = type === 'urgent' ? styles.urgent : styles.default;

    if (html) {
      return (
        <li
          data-notification-type={type}
          onClick={this.handleClick}
          dangerouslySetInnerHTML={{ __html: html }}
          className={css(styleClass)}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        onClick={this.handleClick}
        className={css(styleClass)}
      >
        {value}
      </li>
    );
  }
}

export default NotificationItem;
