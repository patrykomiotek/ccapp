import React, { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Rendering/LostUpdate',
};

const countAction = action('count');

export const ReactRefLostUpdate = () => {
  const [countA, setCountA] = useState(0)
  const countB = useRef(0)

  return <>
    <p>values: A={countA}, B={countB.current}</p>
    <button
      onClick={() => {
        setCountA(a => a + 1)
        countAction('a')
      }}
    >increment A</button>
    <button
      onClick={() => {
        countB.current += 1
        countAction('b')
      }}
    >increment B</button>
  </>
}
