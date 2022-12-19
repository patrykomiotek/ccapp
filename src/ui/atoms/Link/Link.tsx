import type { ComponentPropsWithoutRef } from 'react';
import { Link as RRLink } from 'react-router-dom';

import styles from './Link.module.scss'

interface Props extends ComponentPropsWithoutRef<typeof RRLink> {
}

const Link = (
    { children, ...rest }: Props,
) => {
  return (
    <RRLink
      className={styles.main}
      {...rest}
      >
      {children}
    </RRLink>
  );
};

export { Link };
