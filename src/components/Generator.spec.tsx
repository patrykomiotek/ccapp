import { render, screen, debug } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Generator } from "./Generator";
import { ThemeProvider } from "./Theme/ThemeContext";

describe('<Generator />', () => {
  it('should generate new value after click', () => {
    render(<ThemeProvider><Generator /></ThemeProvider>);
    // debug();

    const uuid = screen.getByText(/[a-z0-9-]{36}/).textContent;

    userEvent.click(screen.getByRole('button', { name: 'Click me'}));

    const uuidChanged = screen.getByText(/[a-z0-9-]{36}/).textContent;

    expect(uuid).not.toBe(uuidChanged);
  });

  it('should be visible', () => {
    render(<ThemeProvider><Generator /></ThemeProvider>);

    const uuid = screen.getByText(/[a-z0-9-]{36}/);

    expect(uuid).toBeInTheDocument();
  });
});