const express = require("express");
const mongoose = require("mongoose"); //Brandon_Added
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/destination_db", { useNewUrlParser: true, useUnifiedTopology: true  }); //Brandon_Added

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.use(require("./routes"))

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
//adding this comment to push to github again

