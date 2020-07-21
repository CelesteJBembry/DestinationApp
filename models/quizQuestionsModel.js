const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//updated from mongoose.Schema
const questions = new Schema({
  question: { type: String, required: true },
  answers: [{
    answer1: { type: String, required: true },
    img: { type: String, required: true },

    answer2: { type: String, required: true },
    img: { type: String, required: true },

    answer3: { type: String, required: true },
    img: { type: String, required: true },

    answer4: { type: String, required: true },
    img: { type: String, required: true },
  }]
});

const quizQuestions = mongoose.model("quizQuestions", questions);

module.exports = quizQuestions;