const { expect } = require('chai');
const models = require('.');

describe('Integration tests', () => {
  it('"Factories" model should be included', () => {
    expect(models).to.have.property('Factories');
  });

  it('"Sprocket" model should be included', () => {
    expect(models).to.have.property('Sprocket');
  });
});
