module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    debug: true,
  },
});
