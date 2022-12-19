import { useRef, useEffect } from 'react';
import type { MouseEventHandler } from 'react';
import { ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { renderAction } from '@stories/utils';

export default {
  title: 'UI/Atoms/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  },
} as ComponentMeta<typeof Button>;


export const _Button = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  // const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
  //   renderAction('rendered after click');
  // }
  return (
    <Button ref={buttonRef}>
      Click me
    </Button>
  );
}
