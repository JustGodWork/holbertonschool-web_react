import { render } from "@testing-library/react";
import BodySection from "./BodySection";

describe("BodySection", () => {
  test("renders a heading with the title prop value", () => {
    const { getByText } = render(<BodySection title="Test title" />);
    const heading = getByText("Test title");
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H2");
  });

  test("rends children inside the component", () => {
    const { getByText } = render(
      <BodySection title="Test">
        <p>Child content</p>
      </BodySection>
    );
    expect(getByText("Child content")).toBeInTheDocument();
  });
});
