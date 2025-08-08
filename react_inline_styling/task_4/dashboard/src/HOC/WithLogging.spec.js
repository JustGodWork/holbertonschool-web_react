import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import WithLogging from './WithLogging';

afterEach(() => {
  cleanup();
});

describe('WithLogging HOC', () => {
  class MockApp extends React.Component {
    render() {
      return <h1>Hello from Mock App Component</h1>;
    }
  }

  test('renders heading from MockApp', () => {
    const Wrapped = WithLogging(MockApp);
    render(<Wrapped />);
    expect(screen.getByRole('heading', { name: /hello from mock app component/i })).toBeInTheDocument();
  });

  test('logs on mount and unmount', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const Wrapped = WithLogging(MockApp);
    const { unmount } = render(<Wrapped />);
    expect(logSpy).toHaveBeenCalledWith('Component MockApp is mounted');
    unmount();
    expect(logSpy).toHaveBeenCalledWith('Component MockApp is going to unmount');
    logSpy.mockRestore();
  });
});
