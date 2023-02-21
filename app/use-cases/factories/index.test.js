const { expect } = require('chai');
const factoryService = require('.');

describe('Integration tests', () => {
  it('factoryService should have the correct methods', () => {
    expect(factoryService).to.have.property('findFactory');
    expect(factoryService).to.have.property('findAllFactory');
  });
});
