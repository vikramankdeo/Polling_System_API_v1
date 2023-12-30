const Question = require('../../../models/questions'); // Import your Question model
const Option = require('../../../models/options');
const mongoose = require('mongoose');
const ques = require('../../../models/questions');



module.exports.get_all_ques = async function(req , res){
  try {
    
    //const allFields = await Question.find({});
    const allQues = await Question.find({}); 
    // Send a JSON response with the saved question
    return res.status(200).json(allQues);
  } catch (error) {
    // If an error occurs, send a JSON response with the error message
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

// Handler for creating a new question
module.exports.create =async function(req , res){
  try {
    console.log(req.body.title);
    const title = req.body.title;

    // Create a new instance of the Question model
    const newQuestion = new Question({
      title
    });

    // Save the new instance to the database
    const savedQuestion = await newQuestion.save();

    const selectedFields = await Question.findById(savedQuestion._id).select('-updatedAt -createdAt -__v');

    // Send a JSON response with the saved question
    res.status(200).json(
      selectedFields);
  } catch (error) {
    // If an error occurs, send a JSON response with the error message
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};



module.exports.create_option = async function(req , res){
  console.log(req.body.title);
  const id = req.params.id;
  const text = req.body.title; // Extract data from request body
  try {
    // Create a new Option associated with the specified question ID
    const newOption = await Option.create({
      questionId: id,
      text
      // Add other fields as needed based on your Option schema
    });

    // Generate the link using the ID of the newly created option
    const link = `localhost:8003/api/v1/options/${newOption._id}/add_vote`;

    // Update the newly created Option document with the generated link
    await Option.findByIdAndUpdate(newOption._id, { link_to_vote:link });

    // Update the Question document to add the new option's ID to the options array
    const updatedQuestion = await Question.findByIdAndUpdate(
      id,
      { $push: { options: newOption._id } }, // Add the new option's ID to the options array
      { new: true }
    );
    const selectedFields = 'id text votes link_to_vote'; // Fields you want to populate from the Option schema

    const question = await Question.findById(id)
      .select('id title options') // Specify fields from the Question schema
      .populate({
        path: 'options',
        select: selectedFields // Specify the fields you want to populate from the Option schema
      })
      .lean(); // Convert Mongoose document to plain JavaScript object

      

    return res.status(200).json(question); // Respond with the populated question object
  
    //res.status(200).json({updatedQuestion}); // Respond with the updated Question document
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports.delete_ques = async function(req , res){
  const id  = req.params.id; // Extract the ID from the request URL
  console.log(id);
  try {
    // Find the question by ID and remove it
    const deletedQuestion = await Question.findOneAndDelete({ _id: id });
    const deleteoption = await Option.deleteMany({ questionId: id });

    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    return res.status(200).json({ message: 'Question deleted successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports.get_ques = async function(req , res){
  const id = req.params.id;
  //const findQues =await Question.findById(id , {updatedAt : 0 , createdAt : 0 , __v : 0});
  
  const selectedFields = 'id text votes link_to_vote'; // Fields you want to populate from the Option schema

  const question = await Question.findById(id)
    .select('id title options') // Specify fields from the Question schema
    .populate({
      path: 'options',
      select: selectedFields // Specify the fields you want to populate from the Option schema
    })
    .lean(); // Convert Mongoose document to plain JavaScript object

  if (!question) {
    return res.status(404).json({ message: 'Question not found' });
  }

  return res.status(200).json(question);
}