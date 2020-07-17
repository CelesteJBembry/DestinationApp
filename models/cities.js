const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citiesSchema = new mongoose.Schema({
    city: {
        type: String,
        default: ""
      },
});

const Cities = mongoose.model("Cities", citiesSchema);

module.exports = Cities;

  // question: { type: String, required: true },
  // option1: { type: String, required: true },
  // option2: { type: String, required: true },
  // option3: { type: String, required: true },
  // option4: { type: String, required: true },
  // image: ?

