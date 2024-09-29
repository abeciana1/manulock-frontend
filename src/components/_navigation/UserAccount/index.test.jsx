import UserAccount from '../UserAccount';
import { render, screen } from '@testing-library/react';

describe('UserAccount', () => {
  beforeEach(() => {
    render(<UserAccount />);
  });
  test('should render', () => {
    const userAccount = screen.getByTestId('user-account');
    expect(userAccount).toBeInTheDocument();
  });
});
