const express = require('express');
const sprocket = require('./sprocket');
const factories = require('./factories');

const router = express.Router();

router.use(sprocket);
router.use(factories);

module.exports = router;
