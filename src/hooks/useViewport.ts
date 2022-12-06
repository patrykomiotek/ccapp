import { useState, useEffect } from 'react';

const useViewport = () => {
  const [size, setSize] = useState({
    x: 0, y: 0, z: 0
  });
  const handleResize = () => {
    console.log(window.innerWidth, window.innerHeight);
    setSize({ x: window.innerWidth, y: window.innerHeight, z: Math.random() });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('Mount');
    // window.addEventListener('resize', b);
    // handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Unmount');
    }
  }, []);

  return size;
}

export { useViewport };
