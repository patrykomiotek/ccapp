import { ComponentMeta } from '@storybook/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Menu } from './Menu';

export default {
  title: 'UI/Molecules/Menu',
  component: Menu,
  decorators: [(Story) => (
    <MemoryRouter initialEntries={["/products/rec5c99tUqiFYiLb8"]}>
      <Routes>
        <Route path="/products/:id" element={<Story />} />
      </Routes>
    </MemoryRouter>
  )],
} as ComponentMeta<typeof Menu>;


export const _Menu = () => <Menu />
