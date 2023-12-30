const Question = require('../../../models/questions'); // Import your Question model
const Option = require('../../../models/options');
const mongoose = require('mongoose');

module.exports.add_vote =async function(req , res){
    console.log("called");
    console.log(req.url);
  const id  = req.params.id; // Extract the ID from the request URL
  console.log(id);
  try {
    // Find the Option document by ID
    const option = await Option.findById(id);

    if (!option) {
      return res.status(404).json({ error: 'Option not found' });
    }
    let votes = option.votes + 1;
    // Update the votes field of the found Option document
    option.votes = votes; // Assign the new votes value to the votes field

    // Save the updated Option document
    const updatedOption = await option.save();

    return res.json({message:"vote added succesfully"}); // Respond with the updated Option document
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


module.exports.delete_opt = async function(req , res){
  const id  = req.params.id; // Extract the ID from the request URL
  console.log(id);
  try {
    // Find the question by ID and remove it
    const deleteOption = await Option.findOneAndDelete({ _id: id });
    const quesId = deleteOption.questionId;
    

    if (!deleteOption) {
      return res.status(404).json({ message: 'Option not found' });
    }

    return res.status(200).json({ message: 'Option deleted successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.get_option = async function(req , res){
  const id = req.params.id;
  const findOpt =await Option.findById(id , {updatedAt : 0 , createdAt : 0 , questionId : 0 , __v : 0});
  if (!findOpt) {
    return res.status(404).json({ message: 'Option not found' });
  }

  return res.status(200).json(findOpt);
}