import React from 'react';
import App from './App.jsx'
import { render, screen } from '@testing-library/react';

test('Renders Notifications component', () => {
    render(<App />);

    const notification = screen.getByText(/notifications/i);

    expect(notification).toBeInTheDocument();
});

test('Renders Header component', () => {
    render(<App />);

    const header = screen.getByText(/school dashboard/i);

    expect(header).toBeInTheDocument();
});

test('Renders Login component', () => {
    render(<App />);

    const loginText = screen.getByText(/login to access the full dashboard/i);

    expect(loginText).toBeInTheDocument();
});

test('Renders Footer component', () => {
    render(<App />);

    const footer = screen.getByText(/copyright/i);

    expect(footer).toBeInTheDocument();
});


test('Should render the Login component', () => {
    render(<App isLoggedIn={false} />);

    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();

    const courseList = screen.queryByText(/available courses/i);
    expect(courseList).not.toBeInTheDocument();
});

test('Should render a CourseList component', () => {
    render(<App isLoggedIn={true} />);

    const courseList = screen.getByText(/available courses/i);
    expect(courseList).toBeInTheDocument();

    const loginText = screen.queryByText(/login to access the full dashboard/i);
    expect(loginText).not.toBeInTheDocument();
});

test('calls logOut when Ctrl+H is pressed', () => {
    const logOutMock = jest.fn();
    render(<App logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);
    expect(logOutMock).toHaveBeenCalledTimes(1);
});

test('calls alert with correct message when Ctrl+H is pressed', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<App />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    alertMock.mockRestore();
});
