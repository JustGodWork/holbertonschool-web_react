import React from 'react';
import App from './App.jsx'
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
afterAll(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

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

describe('App component', () => {
  test('displays Course list title above CourseList when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    expect(screen.getByText(/course list/i)).toBeInTheDocument();
    expect(screen.getByText(/course list/i).nextSibling).toBeInstanceOf(HTMLElement);
  });

  test('displays Log in to continue title above Login when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
    expect(screen.getByText(/log in to continue/i).nextSibling).toBeInstanceOf(HTMLElement);
  });

  test('displays News from the School title and news paragraph', () => {
    render(<App />);
    expect(screen.getByText(/news from the school/i)).toBeInTheDocument();
    expect(screen.getByText(/holberton school news goes here/i)).toBeInTheDocument();
  });
});
