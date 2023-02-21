const { Sequelize } = require('sequelize');
const { DATABASE } = require('../../config');

const sequelize = new Sequelize(DATABASE.NAME, DATABASE.USER, DATABASE.PASSWORD, {
  host: DATABASE.HOST,
  port: DATABASE.PORT,
  dialect: DATABASE.DIALECT
});

module.exports = { sequelize };
