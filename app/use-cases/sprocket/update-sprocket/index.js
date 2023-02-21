const _ = require('lodash');

module.exports.makePutSprocket = ({ sprocketDb }) => {
  const putSprocket = async ({ body, params }) => {
    const sprocketId = params.id;

    const arentValuesIntegers = !_.every(_.values(body), (val) => _.isNumber(val));

    if (arentValuesIntegers || !sprocketId) {
      throw new Error('Invalid type or missing params');
    }

    const updateSprocket = await sprocketDb.update(sprocketId, body);

    return updateSprocket;
  };

  return putSprocket;
};
