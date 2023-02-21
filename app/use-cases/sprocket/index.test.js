const { expect } = require('chai');
const sprocketService = require('.');

describe('Integration tests', () => {
  it('factoryService should have the correct methods', () => {
    expect(sprocketService).to.have.property('findSprocket');
    expect(sprocketService).to.have.property('findAllSprocket');
    expect(sprocketService).to.have.property('putSprocket');
    expect(sprocketService).to.have.property('postSprocket');
  });
});
