const _ = require('lodash');

module.exports.makePostSprocket = ({ sprocketDb }) => {
  const postSprocket = async ({ body }) => {
    const arentValuesIntegers = !_.every(_.values(body), (val) => _.isNumber(val));

    const areValuesNull = !_.every(
      ['teeth', 'pitch_diameter', 'outside_diameter', 'pitch'],
      (prop) => _.has(body, prop)
    );

    if (areValuesNull || arentValuesIntegers) {
      throw new Error('Invalid type or missing field');
    }

    const createdSprocket = await sprocketDb.insert(body);

    return createdSprocket;
  };

  return postSprocket;
};
