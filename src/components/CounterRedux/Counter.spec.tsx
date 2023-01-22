import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { store } from '../../root-store';
import { Counter } from './Counter';

// utils:
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
// renderWithProviders(<Counter />)

describe('<Counter /> with redux component', () => {
  it('should change value', () => {
    render(<Provider store={store}><Counter /></Provider>);

    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const incrementButton = screen.getByRole('button', { name: /increment/i });

    userEvent.click(incrementButton);
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});