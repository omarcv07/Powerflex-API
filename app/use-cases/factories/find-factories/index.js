module.exports.makeFindFactory = ({ factoryDb }) => {
  const findFactory = async ({ params }) => {
    const factoryId = params.id;

    if (!factoryId) {
      throw new Error('Missing ID param');
    }

    const foundFactory = await factoryDb.findOne(factoryId);

    if (!foundFactory) {
      throw new Error('Factory not found');
    }

    return foundFactory;
  };

  return findFactory;
};
