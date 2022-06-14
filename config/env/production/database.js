const parse = require('pg-connection-string').parse;
const config = () => {
  if (process.env.DATABASE_URL) {
    return parse(process.env.DATABASE_URL);
  }
  
  return parse('postgresql://db:AVNS_Xa748KyNOJEW4fz@app-a37a0641-0264-4aaa-920c-a5b98ac8dbbd-do-user-2064451-0.b.db.ondigitalocean.com:25060/db?sslmode=require')
}
    

console.log(config);

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


