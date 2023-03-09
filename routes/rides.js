const express = require('express');
const router = express.Router();

const ridesController = require('../controllers/index');

router.get('/', ridesController.getRides);
router.post('/', ridesController.createRide);

module.exports = router;