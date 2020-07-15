const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/destination_db"
  );

  const citiesSeed =[
      {  
        city: "New York"
      },
      {
          city: "Houston"
      },
      {
          city: "San Francisco"
      },
      {
          city: "Las Vegas"
      },
  ]

  db.Cities.remove({})
  .then(() => db.Cities.collection.insertMany(citiesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
