const models = require('../domain/models');

const { makeFactoriesDb } = require('./factories/factories.db');
const { makeSprocketDb } = require('./sprocket/sprocket.db');

const factoryDb = makeFactoriesDb(models);
const sprocketDb = makeSprocketDb(models);

module.exports = { sprocketDb, factoryDb };
