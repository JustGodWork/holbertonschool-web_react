import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs, and 1 button', () => {
    render(<Login />);
    const labels = screen.getAllByLabelText(/email|password/i);
    const inputs = screen.getAllByRole('textbox');
    const passwordInputs = screen.getAllByLabelText(/password/i);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(labels.length).toBe(2);
    expect(inputs.length + passwordInputs.length).toBe(2);
    expect(button).toBeInTheDocument();
  });

  test('focuses input when label is clicked', () => {
    render(<Login />);
    const emailInput = screen.getByRole('textbox');
    fireEvent.click(screen.getByText(/email/i));
    expect(emailInput).toHaveFocus();
  });
});
