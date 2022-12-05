// import React from 'react';

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
  children: string;
  // name: React.ReactNode;
}

const Text = ({ children }: Props) => {
  return (
    <p>{children}</p>
  );
}

export { Text };
// <Text name="Monday" />
// <Text>Today is monday</Text>
// import Kaczka from './Text' (using export default)