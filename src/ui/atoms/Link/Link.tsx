import type { useMemo, ComponentPropsWithoutRef } from 'react';
import { Link as RRLink } from 'react-router-dom';

import styles from './Link.module.scss'

interface Props extends ComponentPropsWithoutRef<typeof RRLink> {
}

const Link = (
    { children, ...rest }: Props,
) => {
  // useMemo(() => {
  //   return props1 + props2;
  // }, [props1, props2]);

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


// class MuiLink extends Link {
//   theme = 'light';
//   return (
//     <Link muiTheme={this.theme} />
//   )
// }