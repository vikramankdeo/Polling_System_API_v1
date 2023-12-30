const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');



// Require and use routes
const questions = require('./questions');
const options = require('./options');



router.use('/questions',questions);
router.use('/options',options);


module.exports = router;