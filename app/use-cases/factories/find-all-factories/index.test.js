const { expect } = require('chai');
const { makeFindAllFactory } = require('.');
const models = require('../../../data-access');

describe('makeFindAllFactory', () => {
  it('responds with an array of factories', async () => {
    const findAllFactory = makeFindAllFactory(models);
    const factories = await findAllFactory();
    expect(factories).to.be.an('array');
  });
});
