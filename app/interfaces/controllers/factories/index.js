const { findFactory, findAllFactory } = require('../../../use-cases/factories');

module.exports = Object.freeze({
  findFactory: (httpRequest) => findFactory(httpRequest),
  findAllFactory: (httpRequest) => findAllFactory(httpRequest)
});
