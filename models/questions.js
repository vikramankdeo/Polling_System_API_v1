const mongoose = require('mongoose');


const questions = new mongoose.Schema({
    title : {
    type : String , 
    required: true
   },
   options : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'options'
   }]
}
,
   {
    timestamps : true
   }
);


const ques = mongoose.model('questions' , questions);

module.exports = ques;











