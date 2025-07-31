import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

describe('Footer component', () => {
  test('renders the copyright string', () => {
    render(<Footer />);
    const year = getCurrentYear();
    const text = `${getFooterCopy(true)} - ${year}`;
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
