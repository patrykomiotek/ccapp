import { rest } from 'msw'

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// share between stories
export const handlers = [
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

  // rest.post('/login', (req, res, ctx) => {
  //   const { username } = req.body

  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
  //       username,
  //       firstName: 'John',
  //       lastName: 'Maverick',
  //     }),
  //     // ctx.delay(5000),
  //   )
  // }),
]
