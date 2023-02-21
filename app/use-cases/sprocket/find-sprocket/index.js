module.exports.makeFindSprocket = ({ sprocketDb }) => {
  const findSprocket = async ({ params }) => {
    const sprocketId = params.id;
    console.log('sprocketId', sprocketId);
    if (!sprocketId) {
      throw new Error('Missing ID param');
    }

    const foundSprocket = await sprocketDb.findOne(sprocketId);

    if (!foundSprocket) {
      throw new Error('Sprocket not found');
    }

    return foundSprocket;
  };

  return findSprocket;
};
