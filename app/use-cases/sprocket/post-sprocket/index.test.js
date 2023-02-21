const { expect } = require('chai');
const models = require('../../../data-access');
const { makePostSprocket } = require('.');

describe('makePostSprocket', () => {
  it('should create a sprocket', async () => {
    const sprocketData = {
      teeth: 10,
      pitch_diameter: 50.5,
      outside_diameter: 80.5,
      pitch: 8
    };

    const expectedSprocket = {
      ...sprocketData
    };

    const postSprocket = makePostSprocket(models);
    const sprocket = await postSprocket({ body: expectedSprocket });
    expect(sprocket).to.be.an('object');
    expect(sprocket.teeth).to.be.equal(sprocketData.teeth);
    expect(sprocket.outside_diameter).to.be.equal(sprocketData.outside_diameter.toString());
  });

  it('should throw an error for invalid or missing fields', async () => {
    const invalidSprocketData = {
      teeth: 10,
      pitch_diameter: 'invalid value',
      pitch: 8
    };

    const postSprocket = makePostSprocket(models);
    try {
      await postSprocket(invalidSprocketData);
      expect.fail('should throw an error');
    } catch (error) {
      expect(error.message).to.equal('Invalid type or missing field');
    }
  });
});
