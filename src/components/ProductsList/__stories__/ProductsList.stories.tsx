import { ComponentMeta } from '@storybook/react';

import { ProductsList } from '../ProductsList';

export default {
  title: 'App/Products/ProductsList',
} as ComponentMeta<typeof ProductsList>;


export const _ProductsList = () => (
  <ProductsList />
);
