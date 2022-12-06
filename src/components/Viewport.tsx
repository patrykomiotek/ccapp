import { useViewport } from '../hooks/useViewport';

const Viewport = () => {
  const size = useViewport(); // { x: number, y: number }
  const now = new Date();

  return (
    <p>X: {size.x} Y: {size.y}, Z: {size.z} {now.getMilliseconds()}</p>
  );
}

export { Viewport }