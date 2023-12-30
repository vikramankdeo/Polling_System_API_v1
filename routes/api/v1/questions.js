const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ques_ctrl = require('../../../controller/api/v1/questions_ctrl');
//to create a question
router.post('/create',ques_ctrl.create);
router.post('/:id/options/create',ques_ctrl.create_option);
router.get('/:id/delete',ques_ctrl.delete_ques);
router.get('/:id',ques_ctrl.get_ques);
router.get('/',ques_ctrl.get_all_ques);


module.exports =  router;
