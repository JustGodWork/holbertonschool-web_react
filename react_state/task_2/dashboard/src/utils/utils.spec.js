import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe("utils.js test", () => {
  const currentYear = new Date().getFullYear();
  expect(getCurrentYear()).toBe(currentYear);
});

test("getFooterCopy returns the correct string when isIndex is true", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test("getFooterCopy returns the correct string when isIndex is false", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("getLatestNotification returns the expected string", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
