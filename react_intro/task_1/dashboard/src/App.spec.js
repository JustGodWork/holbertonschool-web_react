import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders h1 element with text School dashboard', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders correct text in App-body and App-footer', () => {
    render(<App />);
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();
    const footerText = screen.getByText(/copyright \d{4} - holberton school/i);
    expect(footerText).toBeInTheDocument();
  });

  test('renders the holberton logo image', () => {
    render(<App />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });
});
