const chai = require('chai');
const expect = chai.expect;
const { sprocketDb } = require('..');

describe('Sprocket DB', function () {
  describe('findAll', function () {
    it('should return an array of sprockets', async function () {
      const res = await sprocketDb.findAll();
      expect(res).to.be.an('array');
    });
  });

  describe('findOne', function () {
    it('should return a sprocket with the given ID', async function () {
      const res = await sprocketDb.findOne(1);
      const sprocket = res.dataValues;
      expect(sprocket).to.have.property('id', 1);
      expect(sprocket).to.have.property('teeth');
      expect(sprocket).to.have.property('pitch_diameter');
      expect(sprocket).to.have.property('outside_diameter');
      expect(sprocket).to.have.property('pitch');
    });
  });

  describe('insert', function () {
    it('should insert a new sprocket', async function () {
      const newSprocket = {
        teeth: 10,
        pitch_diameter: 20,
        outside_diameter: 30,
        pitch: 40
      };

      const res = await sprocketDb.insert(newSprocket);

      expect(res).to.have.property('id');
      expect(res).to.have.property('teeth', newSprocket.teeth);
      expect(res).to.have.property('pitch_diameter', newSprocket.pitch_diameter.toString());
      expect(res).to.have.property('outside_diameter', newSprocket.outside_diameter.toString());
      expect(res).to.have.property('pitch', newSprocket.pitch);
    });
  });

  describe('update', function () {
    const updatedSprocket = {
      teeth: 20,
      pitch_diameter: 30,
      outside_diameter: 40,
      pitch: 50
    };

    it('should update an existing sprocket', async function () {
      const res = await sprocketDb.update(1, updatedSprocket);
      expect(res).to.have.property('id', 1);
      expect(res).to.have.property('teeth', updatedSprocket.teeth);
    });
  });
});
