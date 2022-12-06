import { useEffect, useState } from 'react';
import { AuthInfo } from '../components/Auth'

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log('Kura');
      // setCount(count + 1);
      setCount(function (value) {
        return value + 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    }

  }, []);
  return (
    <>
      <AuthInfo />
      <p>Count: {count}</p>
    </>
  );
}

export { Counter };
