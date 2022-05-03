/*module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'), 
        port: env.int('DATABASE_PORT'), 
        database: env('DATABASE_NAME'), 
        user: env('DATABASE_USERNAME'), 
        password: env('DATABASE_PASSWORD'),
        ssl: {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
        },
      },
      debug: false,
    },
  });*/

import { parse } from 'pg-connection-string';
const config = parse(process.env.DATABASE_URL);

export default () => ({
  connection: {
    client: 'postgres',
    connection: {
      ...config,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
