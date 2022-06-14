console.log(process.env.DATABASE_URL

//const parse = require('pg-connection-string').parse;
//const config = parse(process.env.DATABASE_URL);
            
config: {
            host: "blah",
            port: 5432,
            database: "blah",
            user: "blah",
            password: "blah",
            }

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});


