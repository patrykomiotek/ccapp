import { forwardRef, MouseEventHandler, Ref } from 'react';

import styles from './MagicButton.module.scss'

interface Props {
  children: string;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
}

// forwardRef(props, ref)

const MagicButton = forwardRef((
    props: Props,
    ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      onMouseEnter={props.onMouseEnter}
      className={styles.main}
      >
      {props.children}
    </button>
  );
});

export { MagicButton };
