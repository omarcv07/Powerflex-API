const chai = require('chai');
const expect = chai.expect;
const { makeFindAllSprocket } = require('.');
const models = require('../../../data-access');

describe('makeFindAllSprocket', function () {
  it('responds with an array of sprockets', async () => {
    const findAllSprocket = makeFindAllSprocket(models);
    const sprockets = await findAllSprocket();
    expect(sprockets).to.be.an('array');
  });
});
