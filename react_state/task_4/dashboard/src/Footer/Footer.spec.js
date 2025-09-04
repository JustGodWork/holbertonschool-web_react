import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { newContext } from "../Context/context";

test("Contact us link not shown when logged out", () => {
  render(
    <newContext.Provider value={{ user: { isLoggedIn: false } }}>
      <Footer />
    </newContext.Provider>
  );
  expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument();
});

test("Contact us link shown when logged in", () => {
  render(
    <newContext.Provider value={{ user: { isLoggedIn: true } }}>
      <Footer />
    </newContext.Provider>
  );
  expect(screen.getByText(/contact us/i)).toBeInTheDocument();
});
