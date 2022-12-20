import { rest } from 'msw'
import { ComponentMeta } from '@storybook/react';

import { ProductsListWithUseApi } from './ProductsListWithUseApi';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default {
  title: 'App/Products/ProductsListWithUseApi',

} as ComponentMeta<typeof ProductsListWithUseApi>;


export const _ProductsListWithUseApi = () => (
  <ProductsListWithUseApi />
);

_ProductsListWithUseApi.parameters = {
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

export const _ProductsListWithUseApiWith500 = () => (
  <ProductsListWithUseApi />
);

_ProductsListWithUseApiWith500.parameters = {
  msw: {
    handlers: [
      rest.get(`${BASE_URL}/products`, (_req, res, ctx) => {
        return res(ctx.status(500), ctx.delay(2000));
      })
    ]
  }
}

export const _ProductsListWithUseApiWithEmptyJson = () => (
  <ProductsListWithUseApi />
);

_ProductsListWithUseApiWithEmptyJson.parameters = {
  msw: {
    handlers: [
      rest.get(`${BASE_URL}/products`, (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}));
      })
    ]
  }
}

