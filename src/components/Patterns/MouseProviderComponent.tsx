import { MouseProvider } from './MouseProvider';

interface Props {
  x: number;
  y: number;
}
const Renderer = ({ x, y }: Props) => <p>x: {x} y: {y}</p>

export const MouseProviderComponent = () => (
  <MouseProvider
    render={(mouse) => <Renderer x={mouse.x} y={mouse.y} />}
  />
);

{/* <MouseProvider>
  <div>
    <p>The mouse position is {mouse.x}, {mouse.y}</p>
  </div>
</MouseProvider> */}
