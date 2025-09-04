import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { newContext } from "../Context/context";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header component with context", () => {
  test("logoutSection not rendered with default context", () => {
    render(<Header />);
    const logoutSection = screen.queryByText(/logout/i);
    expect(logoutSection).not.toBeInTheDocument();
  });

  test("logoutSection rendered when user is logged in", () => {
    const user = { email: "user@test.com", password: "12345678", isLoggedIn: true };
    render(
      <newContext.Provider value={{ user, logOut: jest.fn() }}>
        <Header />
      </newContext.Provider>
    );
    const logoutSection = screen.getByText(/welcome user@test.com/i);
    expect(logoutSection).toBeInTheDocument();
  });

  test("clicking logout calls logOut function", () => {
    const logOutMock = jest.fn();
    const user = { email: "user@test.com", password: "12345678", isLoggedIn: true };
    render(
      <newContext.Provider value={{ user, logOut: logOutMock }}>
        <Header />
      </newContext.Provider>
    );

    const logoutLink = screen.getByText(/\(logout\)/i);
    fireEvent.click(logoutLink);

    expect(logOutMock).toHaveBeenCalled();
  });
});
