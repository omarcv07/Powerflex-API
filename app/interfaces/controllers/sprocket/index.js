const {
  postSprocket,
  putSprocket,
  findSprocket,
  findAllSprocket
} = require('../../../use-cases/sprocket');

module.exports = Object.freeze({
  findAllSprocket: (httpRequest) => findAllSprocket(httpRequest),
  findSprocket: (httpRequest) => findSprocket(httpRequest),
  postSprocket: (httpRequest) => postSprocket(httpRequest),
  putSprocket: (httpRequest) => putSprocket(httpRequest)
});
