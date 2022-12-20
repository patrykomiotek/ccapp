import { rest } from 'msw'
import { ComponentMeta } from '@storybook/react';

import { ProductsList } from './ProductsList';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default {
  title: 'App/Products/ProductsList',

} as ComponentMeta<typeof ProductsList>;


export const _ProductsList = () => (
  <ProductsList />
);

_ProductsList.parameters = {
  msw: {
    handlers: [
      rest.get(`${BASE_URL}/products`, (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            records: [{
              id: 'abc1',
              fields: {
                name: 'Prod 1',
                description: 'lorem ipsum'
              }
            }, {
              id: 'abc2',
              fields: {
                name: 'Prod 2',
                description: 'lorem ipsum'
              }
            }]
          }),
        );
      }),
    ]
  },
};

export const _ProductsListWith500 = () => (
  <ProductsList />
);

_ProductsListWith500.parameters = {
  msw: {
    handlers: [
      rest.get(`${BASE_URL}/products`, (_req, res, ctx) => {
        return res(ctx.status(500));
      })
    ]
  }
}

export const _ProductsListWithEmptyJson = () => (
  <ProductsList />
);

_ProductsListWithEmptyJson.parameters = {
  msw: {
    handlers: [
      rest.get(`${BASE_URL}/products`, (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}));
      })
    ]
  }
}

