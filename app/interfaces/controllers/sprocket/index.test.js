const { expect } = require('chai');
const sprocketController = require('.');

describe('Integration tests', () => {
  it('sprocketController should have the correct methods', () => {
    expect(sprocketController).to.have.property('findSprocket');
    expect(sprocketController).to.have.property('findAllSprocket');
    expect(sprocketController).to.have.property('putSprocket');
    expect(sprocketController).to.have.property('postSprocket');
  });
});
