import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from './Footer';
import { defaultUser } from '../Context/context';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders correct text content in p elements', () => {
  render(<Footer />);

  const currentYear = new Date().getFullYear();
  const footerParagraph = screen.getByText(
    new RegExp(`copyright ${currentYear}.*holberton school`, 'i')
  );

  expect(footerParagraph).toBeInTheDocument();
});

test('does NOT display "Contact us" link when user is logged out', () => {
  const user = { ...defaultUser };

  render(<Footer user={user} />);

  const contactLink = screen.queryByRole('link', { name: /contact us/i });
  expect(contactLink).not.toBeInTheDocument();
});

test('displays "Contact us" link when user is logged in', () => {
  const user = { email: 'user@example.com', password: 'strongpass', isLoggedIn: true };

  render(<Footer user={user} />);

  const contactLink = screen.getByRole('link', { name: /contact us/i });
  expect(contactLink).toBeInTheDocument();
});
