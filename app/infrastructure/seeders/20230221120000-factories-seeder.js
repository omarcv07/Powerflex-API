module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'factories',
      [
        {
          sprocket_production_actual: [5, 10, 8],
          sprocket_production_goal: [10, 10, 10],
          time: [
            '2023-02-04 12:00:00',
            '2023-02-04 13:00:00',
            '2023-02-04 14:00:00'
          ],
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          sprocket_production_actual: [7, 8, 6],
          sprocket_production_goal: [10, 10, 10],
          time: [
            '2023-02-08 12:00:00',
            '2023-02-08 13:00:00',
            '2023-02-08 14:00:00'
          ],
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          sprocket_production_actual: [9, 7, 8],
          sprocket_production_goal: [10, 10, 10],
          time: [
            '2023-02-05 12:00:00',
            '2023-02-05 13:00:00',
            '2023-02-05 14:00:00'
          ],
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('factories', null, {});
  }
};
