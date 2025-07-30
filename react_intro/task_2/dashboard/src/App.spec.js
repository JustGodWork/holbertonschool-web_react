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

  test('renders 2 input elements', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    // Email input is type="email", password input is type="password" (not textbox role)
    // So we check for both textbox and password input
    const passwordInputs = screen.getAllByLabelText(/password/i);
    expect(inputs.length + passwordInputs.length).toBe(2);
  });

  test('renders 2 label elements with text Email and Password', () => {
    render(<App />);
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test('renders a button with text OK', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});
