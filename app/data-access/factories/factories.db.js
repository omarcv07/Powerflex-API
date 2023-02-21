const makeFactoriesDb = ({ Factories }) => {
  async function findAll () {
    const factories = Factories.findAll();
    return factories;
  }
  async function findOne (id) {
    const factory = await Factories.findByPk(id);
    return factory;
  }
  return Object.freeze({
    findAll,
    findOne
  });
};

module.exports.makeFactoriesDb = makeFactoriesDb;
