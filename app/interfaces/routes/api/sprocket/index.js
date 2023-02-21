const express = require('express');
const router = express.Router();

const sprocketController = require('../../../controllers/sprocket');
const makeExpressCallback = require('../../make-callback');

router.route('/sprockets').get(makeExpressCallback(sprocketController.findAllSprocket));

router.route('/sprockets/:id').get(makeExpressCallback(sprocketController.findSprocket));

router.route('/sprockets').post(makeExpressCallback(sprocketController.postSprocket));

router.route('/sprockets/:id').put(makeExpressCallback(sprocketController.putSprocket));

module.exports = router;
