const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../infrastructure/database/database');

const Sprocket = sequelize.define(
  'sprocket',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    teeth: {
      type: DataTypes.INTEGER
    },
    pitch_diameter: {
      type: DataTypes.DECIMAL
    },
    outside_diameter: {
      type: DataTypes.DECIMAL
    },
    pitch: {
      type: DataTypes.INTEGER
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
    tableName: 'sprockets',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

module.exports = Sprocket;
