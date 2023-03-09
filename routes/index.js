const express = require('express');
const router = express.Router();


router.use('/', require('./test'));
router.use('/', require('./swagger'));
router.use('/rides', require('./rides'));

module.exports = router;