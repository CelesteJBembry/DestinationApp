const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questions = new Schema({                   //updated from mongoose.Schema
   question: { type: String, required: true},
   answers: [{
     answer1: {type: String, required: true},
     img1:     {type: String, required: true},
     
     answer2: {type: String, required: true},
     img2:     {type: String, required: true},
     
     answer3: {type: String, required: true},
     img3:     {type: String, required: true},
     
     answer4: {type: String, required: true},
     img4:     {type: String, required: true},
   }]
});

const quizQuestions = mongoose.model("quizQuestions", questions);

module.exports = quizQuestions;