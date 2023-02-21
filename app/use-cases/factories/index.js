const { factoryDb } = require('../../data-access');

const { makeFindAllFactory } = require('./find-all-factories');
const { makeFindFactory } = require('./find-factories');

const findFactory = makeFindFactory({
  factoryDb
});

const findAllFactory = makeFindAllFactory({
  factoryDb
});

const factoryService = Object.freeze({
  findFactory,
  findAllFactory
});

module.exports.factoryService = factoryService;

module.exports = {
  findFactory,
  findAllFactory
};
