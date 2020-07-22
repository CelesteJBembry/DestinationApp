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
               img: "https://www.kymenmatkat.fi/wp-content/uploads/2018/01/USA-Yellowstone-old-geyser-1920.jpg"
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
        question: "Favorite type of food?",
        answers:[
          {
            answer1: "Seafood",
            img: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1100&format=jpeg&auto=webp"
          },{
            answer2: "Meat-Lover",
            img: "https://www.pizzahut-tt.com/wp-content/uploads/2017/05/MEAT-LOVER%E2%80%99S.png"
          },
          {
            answer3: "Vegan",
            img: "https://blog.busuu.com/wp-content/uploads/2019/02/how-to-say-vegan-vegetarian-different-languages.jpg"
          },{
            answer4: "Vegetarian",
            img: "https://static.toiimg.com/photo/msid-73802502/73802502.jpg?408024"
          }
        ]
      },
      {  
        question: "Favorite Activity?",
        answers:[
          {
            answer1: "Rodeo",
            img: "https://c0.wallpaperflare.com/preview/115/494/489/animal-cowgirl-equestrian-riding.jpg"
          },{
            answer2: "Jet Skiing",
            img: "https://storage.needpix.com/rsynced_images/jet-ski-2781105_1280.jpg"
          },{
            answer3: "Museum",
            img: "https://2009-2017-fpc.state.gov/img/10/39134/museum_3470_1.jpg"
          },{
            answer4: "Mountain climbing",
            img: "https://www.1zoom.me/big2/176/251113-frederika.jpg"
          }
          
        ]
      },
      {  
        question: "Favorite way to travel?",
        answers:[
          {
            answer1: "Plane",
            img: "https://www.telegraph.co.uk/content/dam/Travel/2018/January/white-plane-sky.jpg?imwidth=450"
          },{
            answer2: "Car",
            img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/Evo/restyle/3_RP---Huracan-Evo-88.jpg"
          },{
            answer3: "Walking",
            img: "https://www.inquirer.com/resizer/XpUx_UZKn7K3ghen_Nkk1s-ZfS0=/0x0:2121x1411/1400x932/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/55M2LYRUYNEWLEOM2KR5WSIYXY.jpg"
          },{
            answer4: "Trolley/Subway",
            img: "https://alaskashoreexcursions.com/media/ecom/prodxl/New%20Trolley%20Tour%204.JPG"
          }
        ]
      },
      {  
        question: "Which Movie genre?",
        answers:[
          {
            answer1: "Horror",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Chucky_%28Child%27s_Play%29.jpg/220px-Chucky_%28Child%27s_Play%29.jpg"
          },{
            answer2: "Comedy",
            img: "https://bigtommys.com/wp-content/uploads/2015/09/29857144_m.jpg"
          },
          {
            answer3: "Drama",
            img: "https://img.cinemablend.com/filter:scale/quill/7/f/f/2/d/c/7ff2dca8b628deb838445a3dc2561d9889047620.jpg?mw=600"
          },{
            answer4: "Action",
            img: "https://p0.ipstatp.com/large/005b30166fa0c091c18e"
          }
        ]
      }
  ]
  db.quizQuestions
  .remove({})
  .then(() => db.quizQuestions.collection.insertMany(questions))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });