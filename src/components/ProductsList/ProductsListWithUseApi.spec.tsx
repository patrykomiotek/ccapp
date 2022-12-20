import { render, screen, waitFor } from "@testing-library/react";
import { ProductsListWithUseApi } from "./ProductsListWithUseApi";

describe('<ProductsListWithUseApi />', () => {
  it('should display indicator after mount', () => {
    render(<ProductsListWithUseApi />)

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display data after mount', async () => {
    const { debug } = render(<ProductsListWithUseApi />)

    // debug();
    // Promises
    // await waitFor(() => {
    //   // debug();
    //   expect(screen.getByText('Products')).toBeInTheDocument();
    // });

    // UI changes, option select, checkboxes
    expect(await screen.findByText('Products')).toBeInTheDocument();
  });
});