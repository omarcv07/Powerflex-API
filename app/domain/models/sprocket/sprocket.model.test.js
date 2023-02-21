const { expect } = require('chai');
const { sequelize } = require('../../../infrastructure/database/database');
const Sprocket = require('./sprocket.model');

describe('Sprocket Model', () => {
  beforeEach(async () => {
    // Synchronize the model with the database
    await sequelize;
  });

  describe('Properties', () => {
    it('should have property id', () => {
      expect(Sprocket.rawAttributes).to.have.property('id');
    });

    it('should have property teeth', () => {
      expect(Sprocket.rawAttributes).to.have.property('teeth');
    });

    it('should have property pitch_diameter', () => {
      expect(Sprocket.rawAttributes).to.have.property('pitch_diameter');
    });

    it('should have property outside_diameter', () => {
      expect(Sprocket.rawAttributes).to.have.property('outside_diameter');
    });

    it('should have property pitch', () => {
      expect(Sprocket.rawAttributes).to.have.property('pitch');
    });

    it('should have property created_at', () => {
      expect(Sprocket.rawAttributes).to.have.property('created_at');
    });

    it('should have property updated_at', () => {
      expect(Sprocket.rawAttributes).to.have.property('updated_at');
    });
  });

  describe('Table Name', () => {
    it('should have the table name "sprockets"', () => {
      expect(Sprocket.tableName).to.equal('sprockets');
    });
  });

  describe('Timestamps', () => {
    it('should use the column name "created_at" for createdAt', () => {
      expect(Sprocket.options.createdAt).to.equal('created_at');
    });

    it('should use the column name "updated_at" for updatedAt', () => {
      expect(Sprocket.options.updatedAt).to.equal('updated_at');
    });
  });
});
