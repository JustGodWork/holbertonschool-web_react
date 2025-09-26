import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StyleSheetTestUtils } from 'aphrodite';
import { newContext, defaultUser } from '../Context/context';

describe('Header component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders img element', () => {
    render(<Header />);
    const imgElement = screen.getByAltText(/holberton logo/i);
    expect(imgElement).toBeInTheDocument();
  });

  test('renders h1 element with "School Dashboard" text', () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading', {
      name: /school dashboard/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  test('with default context value, logoutSection is NOT rendered', () => {
    // Pas de Provider => Header utilise la valeur par défaut du contexte
    const { container } = render(<Header />);
    const logoutSection = container.querySelector('#logoutSection');
    expect(logoutSection).not.toBeInTheDocument();
  });

  test('with a logged-in user in context, logoutSection IS rendered', () => {
    const user = { email: 'user@example.com', password: 'strongpass', isLoggedIn: true };
    const logOut = jest.fn();

    const { container } = render(<Header user={user} logOut={logOut} />);

    const logoutSection = container.querySelector('#logoutSection');
    expect(logoutSection).toBeInTheDocument();

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/user@example.com/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /logout/i })).toBeInTheDocument();
  });

  test('clicking on the "logout" link calls the logOut function (spy)', async () => {
    const userUi = userEvent.setup();
    const logOutSpy = jest.fn();
    const user = { email: 'user@example.com', password: 'strongpass', isLoggedIn: true };

    render(<Header user={user} logOut={logOutSpy} />);

    const logoutLink = screen.getByRole('link', { name: /logout/i });
    await userUi.click(logoutLink);
    expect(logOutSpy).toHaveBeenCalled();
  });
});
