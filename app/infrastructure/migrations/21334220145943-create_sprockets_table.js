'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sprockets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      teeth: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pitch_diameter: {
        type: Sequelize.NUMERIC,
        allowNull: false
      },
      outside_diameter: {
        type: Sequelize.NUMERIC,
        allowNull: false
      },
      pitch: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sprockets');
  }
};
