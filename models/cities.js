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
