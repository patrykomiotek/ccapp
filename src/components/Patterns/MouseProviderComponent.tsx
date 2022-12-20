import { MouseProvider } from './MouseProvider';

export const MouseProviderComponent = () => (
  <MouseProvider
    render={mouse => (
      <>
        <p>The mouse position is {mouse.x}, {mouse.y}</p>
      </>
    )}
  />
);
