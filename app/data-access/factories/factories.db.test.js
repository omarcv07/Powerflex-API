const expect = require('chai').expect;
const { factoryDb } = require('..');

describe('Factories DB', () => {
  it('findAll', async () => {
    const res = await factoryDb.findAll();
    expect(res).to.be.an('array');
  });

  it('findOne', async () => {
    const res = await factoryDb.findOne(1);
    const factory = res.dataValues;
    expect(factory).to.be.an('object');
  });
});
