import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login/Login";

test("calls logIn prop on form submission", () => {
  const mockLogIn = jest.fn();
  render(<Login logIn={mockLogIn} email="" password="" />);

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole("button", { name: /ok/i });

  fireEvent.change(emailInput, { target: { value: "user@test.com" } });
  fireEvent.change(passwordInput, { target: { value: "12345678" } });

  fireEvent.click(submitButton);

  expect(mockLogIn).toHaveBeenCalledWith("user@test.com", "12345678");
});
