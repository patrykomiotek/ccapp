import { forwardRef, Ref, ComponentPropsWithRef } from 'react';

import styles from './Button.module.scss'

interface Props extends ComponentPropsWithRef<'button'> {
  children: string;
}

const Button = forwardRef((
    { children, ...rest }: Props,
    ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      className={styles.main}
      {...rest}
      >
      {children}
    </button>
  );
});

export { Button };
