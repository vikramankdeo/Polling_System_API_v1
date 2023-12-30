const mongoose = require('mongoose');


const options = new mongoose.Schema({
    text : {
    type : String , 
    required: true
   },
   votes : {
      type: Number, // Change the type to Number for storing votes as integers
      default: 0 // Optionally set a default value for votes
     },
   link_to_vote : {
    type : String
   },
   questionId : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'questions'
   }
}
,
   {
    timestamps : true
   }
);


const opt = mongoose.model('options' , options);

module.exports = opt;











