module.exports.makeFindAllSprocket = ({ sprocketDb }) => {
  const findAllSprocket = async () => {
    const sprockets = await sprocketDb.findAll();
    return sprockets;
  };

  return findAllSprocket;
};
