const { sprocketDb } = require('../../data-access');

const { makeFindAllSprocket } = require('./find-all-sprocket');
const { makeFindSprocket } = require('./find-sprocket');
const { makePostSprocket } = require('./post-sprocket');
const { makePutSprocket } = require('./update-sprocket');

const findAllSprocket = makeFindAllSprocket({
  sprocketDb
});

const findSprocket = makeFindSprocket({
  sprocketDb
});

const postSprocket = makePostSprocket({
  sprocketDb
});

const putSprocket = makePutSprocket({
  sprocketDb
});

const sprocketService = Object.freeze({
  postSprocket,
  putSprocket,
  findSprocket,
  findAllSprocket
});

module.exports.sprocketService = sprocketService;

module.exports = {
  postSprocket,
  putSprocket,
  findSprocket,
  findAllSprocket
};
