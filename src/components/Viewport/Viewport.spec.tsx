// jest.mock('@hooks/useViewport', () => {
//   const originalModule = jest.requireActual('@hooks/useViewport');
//   return {
//     ...originalModule,
//     useViewport: jest.fn(),
//   }
// });

jest.mock('@hooks/useViewport', () => ({
  useViewport: jest.fn(),
  // useViewport: () => ({ x: 10, y: 20 }),
}));

import { render, screen } from '@testing-library/react';

import { useViewport } from '@hooks/useViewport';
import { Viewport } from './Viewport';

// jest.mock('@hooks/useViewport', () => ({
//   useViewport: () => ({ x: 100, y: 200 }),
// }));


const mockedUseViewport = useViewport as jest.Mock;

describe('<Viewport /> component with mocked hook per test', () => {
  it('should display values from mocked hook', () => {
    mockedUseViewport.mockImplementationOnce(() => ({ x: 14, y: 15 }));
    render(<Viewport />);
    expect(screen.getByText(/x: 14 y: 15/i)).toBeInTheDocument();
  });

  it('should display values from mocked hook ver 2', () => {
    mockedUseViewport.mockImplementationOnce(() => ({ x: 22, y: 22 }));
    render(<Viewport />);
    expect(screen.getByText(/x: 22 y: 22/i)).toBeInTheDocument();
  });
});