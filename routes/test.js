const express = require('express');
const router = express.Router();

const testController = require('../controllers/index');

router.get('/', testController.nameFunction);

module.exports = router;