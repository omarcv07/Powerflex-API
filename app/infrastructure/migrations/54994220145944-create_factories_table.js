'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('factories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sprocket_production_actual: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false
      },
      sprocket_production_goal: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false
      },
      time: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
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
    await queryInterface.dropTable('factories');
  }
};
