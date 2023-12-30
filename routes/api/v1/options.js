const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const option_ctrl = require('../../../controller/api/v1/options_ctrl');
//to create a question
router.get('/:id/delete',option_ctrl.delete_opt);
router.get('/:id',option_ctrl.get_option);
router.get('/:id/add_vote',option_ctrl.add_vote);

module.exports =  router;
