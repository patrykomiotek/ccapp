import { ComponentMeta } from '@storybook/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Link } from './Link';

export default {
  title: 'UI/Atoms/Link',
  component: Link,
  decorators: [(Story) => (
    <MemoryRouter initialEntries={["/products/rec5c99tUqiFYiLb8"]}>
      <Routes>
        <Route path="/products/:id" element={<Story />} />
      </Routes>
    </MemoryRouter>
  )],
} as ComponentMeta<typeof Link>;


export const _Link = () => {
  return (
    <Link to="/">
      Home
    </Link>
  );
}
