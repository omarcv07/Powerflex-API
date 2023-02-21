const { expect } = require('chai');
const models = require('../../../data-access');
const { makePutSprocket } = require('.');

describe('makePutSprocket', function () {
  it('should update a sprocket and return the updated sprocket', async () => {
    const sprocketData = {
      teeth: 10,
      pitch_diameter: 50.5,
      outside_diameter: 80.5,
      pitch: 8
    };

    const putSprocket = makePutSprocket(models);
    const sprocket = await putSprocket({ params: { id: 1 }, body: sprocketData });
    expect(sprocket).to.be.an('object');
    expect(sprocket.teeth).to.be.equal(sprocketData.teeth);
    expect(sprocket.outside_diameter).to.be.equal(sprocketData.outside_diameter);
  });

  it('should return an error if sprocket ID is missing', async () => {
    const invalidSprocketData = {
      teeth: 10,
      pitch_diameter: 32,
      pitch: 8
    };

    const putSprocket = makePutSprocket(models);
    try {
      await putSprocket({ params: { id: null }, body: invalidSprocketData });
      expect.fail('should throw an error');
    } catch (error) {
      expect(error.message).to.equal('Invalid type or missing params');
    }
  });

  it('should return an error if values are not integers', async () => {
    const invalidSprocketData = {
      teeth: 10,
      pitch_diameter: 'invalid value',
      pitch: 8,
      outside_diameter: 80.5
    };

    const putSprocket = makePutSprocket(models);
    try {
      await putSprocket({ body: invalidSprocketData, params: { id: null } });
      expect.fail('should throw an error');
    } catch (error) {
      expect(error.message).to.equal('Invalid type or missing params');
    }
  });
});
