const { Pool } = require('pg');

const pool = new Pool({
  user: 'syd',
  host: 'localhost',
  database: 'testdb',
  password: 'ulrich123',
  port: 5432,
});

module.exports = pool;