import { ComponentPropsWithRef } from 'react';

import styles from './ButtonRow.module.scss'

interface Props extends ComponentPropsWithRef<'button'> {
  children: React.ReactNode;
}

const ButtonRow = ({ children}: Props) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
};

export { ButtonRow };
