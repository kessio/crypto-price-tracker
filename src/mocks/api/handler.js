/* eslint-disable */
import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) =>

    // successful response
    res(ctx.status(200), ctx.json([
      { id: 1, name: 'Xabi Alonzo' },
      { id: 2, name: 'Lionel Messi' },
    ]), ctx.delay(30))),
];
