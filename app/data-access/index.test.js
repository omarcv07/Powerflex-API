const { expect } = require('chai');
const { sprocketDb, factoryDb } = require('.');

describe('Integration tests', () => {
  it('factoryDb should have the correct methods', () => {
    expect(factoryDb).to.have.property('findAll');
    expect(factoryDb).to.have.property('findOne');
  });

  it('sprocketDb should have the correct methods', () => {
    expect(sprocketDb).to.have.property('insert');
    expect(sprocketDb).to.have.property('update');
    expect(sprocketDb).to.have.property('findAll');
    expect(sprocketDb).to.have.property('findOne');
  });
});
