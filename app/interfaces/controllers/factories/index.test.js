const { expect } = require('chai');
const factoryController = require('.');

describe('Integration tests', () => {
  it('factoryController should have the correct methods', () => {
    expect(factoryController).to.have.property('findFactory');
    expect(factoryController).to.have.property('findAllFactory');
  });
});
