import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection', () => {
  test('renders heading with title prop', () => {
    render(<BodySection title="test-title">Test</BodySection>);
    expect(screen.getByRole('heading', { level: 2, name: /test-title/i })).toBeInTheDocument();
  });

  test('renders children', () => {
    render(
      <BodySection title="test-title">
        <p>child1</p>
        <p>child2</p>
      </BodySection>
    );
    expect(screen.getByText('child1')).toBeInTheDocument();
    expect(screen.getByText('child2')).toBeInTheDocument();
  });
});
