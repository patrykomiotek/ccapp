// import React from 'react';
import { memo } from 'react';
import styles from './Text.module.scss';

// Code style
// 1. export default
// 2. components functions vs arrow functions
// 3. export on next to signature or bottom of file

// export default function Text() {
// function Text() {
// export const Text = () => {

// type Props = {
interface Props {
  // name: string;
  children: string | number;
  // name: React.ReactNode;
}

const Text = memo(({ children }: Props) => {
  console.log('render: Text');
  return (
    <p className={styles.main}>{children}</p>
  );
});

export { Text };
// <Text name="Monday" />
// <Text>Today is monday</Text>
// import Kaczka from './Text' (using export default)