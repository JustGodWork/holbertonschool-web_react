import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

beforeAll(() => StyleSheetTestUtils.suppressStyleInjection());
afterAll(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('BodySectionWithMarginBottom', () => {
  test('contains a div with class bodySectionWithMargin', () => {
    render(<BodySectionWithMarginBottom title="test"><p>child</p></BodySectionWithMarginBottom>);
    expect(screen.getByText('child').parentElement).toHaveClass('bodySectionWithMargin');
  });

  test('renders BodySection component', () => {
    render(<BodySectionWithMarginBottom title="test"><p>child</p></BodySectionWithMarginBottom>);
    expect(screen.getByRole('heading', { level: 2, name: /test/i })).toBeInTheDocument();
  });
});
