import React from 'react';

class NotificationItem extends React.Component {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    if (markAsRead) {
      markAsRead(id);
    }
  };

  render() {
    const { type = 'default', html, value } = this.props;
    const colors = {
      urgent: 'red',
      default: 'blue'
    };

    const color = colors[type];

    if (html) {
      return (
        <li
          data-notification-type={type}
          onClick={this.handleClick}
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ color }}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        onClick={this.handleClick}
        style={{ color }}
      >
        {value}
      </li>
    );
  }
}

export default NotificationItem;
