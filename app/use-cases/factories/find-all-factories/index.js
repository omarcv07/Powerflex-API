module.exports.makeFindAllFactory = ({ factoryDb }) => {
  const findAllFactory = async () => {
    const factories = await factoryDb.findAll();
    return factories;
  };

  return findAllFactory;
};
