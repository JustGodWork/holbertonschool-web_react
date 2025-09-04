import { render } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  test("render one colum header is secondCell === null", () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={true}
            textFirstCell="test"
            textSecondCell={null}
          />
        </tbody>
      </table>
    );

    const th = container.querySelector("th");
    expect(th).toBeInTheDocument();
    expect(th).toHaveAttribute("colSpan", "2");
    expect(th).toHaveTextContent("test");

    const allTh = container.querySelectorAll("th");
    expect(allTh).toHaveLength(1);
  });

  test("When secondCell not null, renders 2 th cells", () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={true}
            textFirstCell="test"
            textSecondCell="ok boomer"
          />
        </tbody>
      </table>
    );
    const tr = container.querySelector("tr");
    expect(tr).toBeInTheDocument();

    const allTd = container.querySelectorAll("th");
    expect(allTd).toHaveLength(2);
    expect(allTd[0]).toHaveTextContent("test");
    expect(allTd[1]).toHaveTextContent("ok boomer");

    expect(tr).toContainElement(allTd[0]);
    expect(tr).toContainElement(allTd[1]);
  });
});
