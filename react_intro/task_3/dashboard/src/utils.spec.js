import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  test('getCurrentYear returns the current year', () => {
    const year = new Date().getFullYear();
    expect(getCurrentYear()).toBe(year);
  });

  test('getFooterCopy returns correct string for true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns correct string for false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns the expected string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
