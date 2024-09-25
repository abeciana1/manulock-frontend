import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo', () => {
  beforeAll(() => {
    render(<Logo />);
  });
  test('should render logo image', () => {
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
  });
});
