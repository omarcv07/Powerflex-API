const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../infrastructure/database/database');

const Factories = sequelize.define(
  'Factories',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sprocket_production_actual: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    },
    sprocket_production_goal: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    },
    time: {
      type: DataTypes.ARRAY(DataTypes.DATE),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'factories',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

module.exports = Factories;
