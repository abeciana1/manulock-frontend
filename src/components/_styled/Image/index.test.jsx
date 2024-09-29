import { render, screen } from '@testing-library/react';
import Image from '../Image';

describe('Logo', () => {
  beforeEach(() => {
    render(
      <Image
        src="https://media.graphassets.com/output=format:jpg/BZcUI4wrSx6BB1zpOyO6"
        alt="Manulock logo"
        height={40}
        width={23}
        priority
      />
    );
  });
  test('should render logo image', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
  test('should render logo image with alt text attribute', () => {
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Manulock logo');
  });
});
