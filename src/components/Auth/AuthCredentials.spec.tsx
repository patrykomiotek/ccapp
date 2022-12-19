import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthCredentials } from './AuthCredentials';
import { AuthProvider } from './AuthContext';

describe('<AuthCredentials /> component', () => {
  it('should toggle context value', () => {
    render(<AuthProvider><AuthCredentials /></AuthProvider>);

    expect(screen.getByText(/is logged in: no/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/is logged in: Yes/i)).toBeInTheDocument();
  });
});