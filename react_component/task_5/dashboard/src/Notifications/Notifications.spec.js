import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from "../utils/utils";

const mockNotifications = [
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

test('Renders 3 notification items with appropriate text', () => {
    const { getByText, container } = render(
        <Notifications
            displayDrawer={true}
            notifications={mockNotifications}
        />
    );

    expect(getByText('New course available')).toBeInTheDocument();
    expect(getByText('New resume available')).toBeInTheDocument();

    const notificationItems = container.querySelectorAll('li');
    expect(notificationItems).toHaveLength(3);
});

test('Renders with empty notifications array by default', () => {
    const { container } = render(<Notifications />);
    const notificationItems = container.querySelectorAll('li');

    expect(notificationItems).toHaveLength(0);
});

test('Always displays "Your notifications" title', () => {
    const { getByText } = render(<Notifications />);

    expect(getByText('Your notifications')).toBeInTheDocument();
});

test('Does not display drawer elements when displayDrawer is false', () => {
    const { queryByText, queryByRole, container, getByText } = render(
        <Notifications displayDrawer={false} notifications={mockNotifications} />
    );

    expect(getByText('Your notifications')).toBeInTheDocument();
    expect(queryByText('Here is the list of notifications')).not.toBeInTheDocument();
    expect(container.querySelectorAll('li')).toHaveLength(0);
    expect(queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
});

test('Displays list, paragraph and close button when displayDrawer is true', () => {
    const { getByText, getByRole, container } = render(
        <Notifications displayDrawer={true} notifications={mockNotifications} />
    );

    expect(getByText('Your notifications')).toBeInTheDocument();
    expect(getByText('Here is the list of notifications')).toBeInTheDocument();
    expect(container.querySelectorAll('li')).toHaveLength(3);
    expect(getByRole('button', { name: /close/i })).toBeInTheDocument();
});

test('Displays "No new notification for now" when displayDrawer is true and no notifications', () => {
    const { getByText, getByRole, queryAllByRole } = render(
        <Notifications displayDrawer={true} notifications={[]} />
    );

    expect(getByText('Your notifications')).toBeInTheDocument();
    expect(getByText('No new notification for now')).toBeInTheDocument();
    expect(queryAllByRole('listitem')).toHaveLength(0);
    expect(getByRole('button', { name: /close/i })).toBeInTheDocument();
});

test('logs correct message when notification item is clicked', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const notifications = [
      { id: 1, type: 'default', value: 'Test 1' },
      { id: 2, type: 'urgent', value: 'Test 2' },
    ];
    render(<Notifications notifications={notifications} />);
    const li = screen.getByText('Test 2');
    fireEvent.click(li);
    expect(logSpy).toHaveBeenCalledWith('Notification 2 has been marked as read');
    logSpy.mockRestore();
  });

describe('Notifications pure component', () => {
    test('does not re-render if notifications length stays the same', () => {
        const initial = [
          { id: 1, type: 'default', value: 'Test 1' },
          { id: 2, type: 'urgent', value: 'Test 2' },
        ];
        const { rerender } = render(<Notifications notifications={initial} />);
        expect(screen.getAllByRole('listitem').length).toBe(2);
        rerender(<Notifications notifications={[...initial]} />);
        expect(screen.getAllByRole('listitem').length).toBe(2);
      });

      test('re-renders if notifications length changes', () => {
        const initial = [
          { id: 1, type: 'default', value: 'Test 1' },
          { id: 2, type: 'urgent', value: 'Test 2' },
        ];
        const { rerender } = render(<Notifications notifications={initial} />);
        expect(screen.getAllByRole('listitem').length).toBe(2);
        rerender(<Notifications notifications={[...initial, { id: 3, type: 'urgent', value: 'Test 3' }]} />);
        expect(screen.getAllByRole('listitem').length).toBe(3);
      });
});
