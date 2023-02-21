const { expect } = require('chai');
const { sequelize } = require('../../../infrastructure/database/database');
const Factories = require('./factories.model');

describe('Factories Model', () => {
  beforeEach(async () => {
    await sequelize;
  });

  describe('Properties', () => {
    it('should have property id', () => {
      expect(Factories.rawAttributes).to.have.property('id');
    });

    it('should have property sprocket_production_actual', () => {
      expect(Factories.rawAttributes).to.have.property('sprocket_production_actual');
    });

    it('should have property sprocket_production_goal', () => {
      expect(Factories.rawAttributes).to.have.property('sprocket_production_goal');
    });

    it('should have property time', () => {
      expect(Factories.rawAttributes).to.have.property('time');
    });

    it('should have property created_at', () => {
      expect(Factories.rawAttributes).to.have.property('created_at');
    });

    it('should have property updated_at', () => {
      expect(Factories.rawAttributes).to.have.property('updated_at');
    });
  });

  describe('Table Name', () => {
    it('should have the table name "factories"', () => {
      expect(Factories.tableName).to.equal('factories');
    });
  });

  describe('Timestamps', () => {
    it('should use the column name "created_at" for createdAt', () => {
      expect(Factories.options.createdAt).to.equal('created_at');
    });

    it('should use the column name "updated_at" for updatedAt', () => {
      expect(Factories.options.updatedAt).to.equal('updated_at');
    });
  });
});
