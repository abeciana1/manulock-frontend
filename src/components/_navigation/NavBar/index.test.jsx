import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

describe('NavBar', () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  test('should render with role of nav', () => {
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  });

  // test('should render with a logo image', () => {
  //   const logo = screen.getByAltText('Manulock logo');
  //   expect(logo).toBeInTheDocument();
  // });
});
