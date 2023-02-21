module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'sprockets',
      [
        {
          teeth: 10,
          pitch_diameter: 10.16,
          outside_diameter: 30,
          pitch: 10,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          teeth: 20,
          pitch_diameter: 20.32,
          outside_diameter: 60,
          pitch: 20,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          teeth: 30,
          pitch_diameter: 30.48,
          outside_diameter: 90,
          pitch: 30,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sprockets', null, {});
  }
};
