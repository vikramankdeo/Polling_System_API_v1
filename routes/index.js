const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');



// Require and use routes
const api = require('./api/v1/index');



router.use('/api/v1',api);


module.exports = router;