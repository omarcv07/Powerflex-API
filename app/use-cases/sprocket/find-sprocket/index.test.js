const { expect } = require('chai');
const { makeFindSprocket } = require('.');
const models = require('../../../data-access');

describe('makeFindSprocket', () => {
  it('should throw an error if sprocketId param is missing', async () => {
    const findSprocket = makeFindSprocket(models);
    try {
      await findSprocket({ params: { id: null } });
      expect.fail('should throw an error');
    } catch (error) {
      expect(error.message).to.equal('Missing ID param');
    }
  });

  it('should return the sprocket if found', async () => {
    const findSprocket = makeFindSprocket(models);
    const sprocket = await findSprocket({ params: { id: 1 } });
    expect(sprocket).to.be.an('object');
  });
});
