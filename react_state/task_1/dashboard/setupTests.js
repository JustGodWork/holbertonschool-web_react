import '@testing-library/jest-dom';

import { StyleSheetTestUtils } from 'aphrodite';

// Prevent style injection before each test
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Re-enable style injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
