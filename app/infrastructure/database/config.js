const { DATABASE } = require('../../config');

module.exports = {
  development: {
    username: DATABASE.USER,
    password: DATABASE.PASSWORD,
    database: DATABASE.NAME,
    host: DATABASE.HOST,
    port: DATABASE.PORT,
    dialect: DATABASE.DIALECT
  }
};
