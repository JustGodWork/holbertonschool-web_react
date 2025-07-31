import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('renders the Holberton logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders the heading h1 with correct text', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });
});
