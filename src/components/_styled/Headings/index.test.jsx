import { render, screen } from '@testing-library/react';
import { Heading1 } from '../Headings';

describe('Headings', () => {
  test('Heading1 should render correctly', () => {
    render(<Heading1 text="Test" color="primary" />);
    const heading = screen.getByRole('heading', {
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});
