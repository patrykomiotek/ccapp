import { useRef, useEffect } from 'react';
import type { MouseEventHandler } from 'react';
import { ComponentMeta } from '@storybook/react';

import { MagicButton } from './MagicButton';

export default {
  title: 'UI/Atoms/MagicButton',
  component: MagicButton,
} as ComponentMeta<typeof MagicButton>;


export const _MagicButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
  }
  return (
    <MagicButton ref={buttonRef} onMouseEnter={handleMouseEnter}>
      Click me
    </MagicButton>
  ); 
}

export const _MagicButtonWithRefs = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current
    if (button) {
      button.style.backgroundColor = '#c0392b';
      button.style.color = '#ecf0f1';
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    const button = buttonRef.current
    if (button) {
      button.style.backgroundColor = '#16a085';
      button.style.color = '#ecf0f1';
    }
  }

  return (
    <MagicButton ref={buttonRef} onMouseEnter={handleMouseEnter}>
      Click me
    </MagicButton>
  );
};
