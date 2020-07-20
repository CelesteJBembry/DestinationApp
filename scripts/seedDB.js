const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/destination_db");

  const questions=[
      {  
        question: "What's your favorite season?",
        answers:[
            {
              answer1: "Winter",
              img: "https://c.pxhere.com/photos/c1/f2/photo-1299553.jpg!d"
            },{
               answer2: "Summer",
               img: "https://pixnio.com/free-images/2017/12/11/2017-12-11-20-16-45-1033x900.jpg"
            },{
              answer3: "Autumn",
              img: "https://www.goodfreephotos.com/albums/united-states/vermont/other-vermont/water-and-autumn-landscape-in-vermont.jpg"
            },{
              answer4: "Spring",
              img: "https://cdn.pixabay.com/photo/2015/10/12/15/01/flower-984089_960_720.jpg"
            }
        ]
      },
      {  
        question: "Would you rather go skiing or dog sledding?",
        answers:[
          {
            answer1: "Skiing",
            img: "https://www.goodfreephotos.com/albums/sports/man-skiing-down-a-snowy-mountain.jpg"
          },{
            answer2: "Dog Sledding",
            img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Frauenwald%2C_Hundeschlittenrennen%2C_6.jpg"
          }
        ]
      },
      {  
        question: "Would you rather go to the rodeo or jet skiing?",
        answers:[
          {
            answer1: "Rodeo",
            img: "https://c0.wallpaperflare.com/preview/115/494/489/animal-cowgirl-equestrian-riding.jpg"
          },{
            answer2: "Jet Skiing",
            img: "https://storage.needpix.com/rsynced_images/jet-ski-2781105_1280.jpg"
          }
        ]
      },
      {  
        question: "Would you rather go to a museum or go mountain climbing?",
        answers:[
          {
            answer1: "Museum",
            img: "https://2009-2017-fpc.state.gov/img/10/39134/museum_3470_1.jpg"
          },{
            answer2: "Mountain climbing",
            img: "https://www.1zoom.me/big2/176/251113-frederika.jpg"
          }
        ]
      },
      {  
        question: "Would you rather go ziplining or go to a comedy show?",
        answers:[
          {
            answer1: "Zipline",
            img: "https://storage.needpix.com/rsynced_images/zipline-4135588_1280.jpg"
          },{
            answer2: "Comedy Show",
            img: "https://live.staticflickr.com/7513/15790648307_bb98a47248_b.jpg"
          }
        ]
      }
  ]
  db.questions
  .remove({})
  .then(() => db.Book.collection.insertMany(questions))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });