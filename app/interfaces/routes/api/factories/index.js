const express = require('express');
const router = express.Router();

const factoryController = require('../../../controllers/factories');
const makeExpressCallback = require('../../make-callback');

router.route('/factories').get(makeExpressCallback(factoryController.findAllFactory));

router.route('/factories/:id').get(makeExpressCallback(factoryController.findFactory));

module.exports = router;
