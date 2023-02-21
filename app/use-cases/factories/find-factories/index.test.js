const { expect } = require('chai');
const { makeFindFactory } = require('.');

describe('makeFindFactory', () => {
  it('should return an error if ID param is missing', async () => {
    const factoryDb = {
      findOne: () => {}
    };
    const findFactory = makeFindFactory({ factoryDb });

    try {
      await findFactory({ params: {} });
    } catch (error) {
      expect(error.message).to.equal('Missing ID param');
    }
  });

  it('should return an error if factory is not found', async () => {
    const factoryDb = {
      findOne: () => null
    };
    const findFactory = makeFindFactory({ factoryDb });

    try {
      await findFactory({ params: { id: 1 } });
    } catch (error) {
      expect(error.message).to.equal('Factory not found');
    }
  });
});
