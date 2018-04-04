
// LOAD DATA 
// Link the route to a data source holding arrays of information on survey responses
var friends = require("../data/friends");
// console.log(surveyData);

// ROUTING
module.exports = function (app) {

  // API GET request 
  // Display a JSON of the survey data in the table (all possible friends)
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // API POST request
  // When a user submits form data (a JSON object), push the form data to the server and save it.
  app.post("/api/friends", function (req, res) {
    // console.log("apiRoutes");

    var userData = req.body;
    var userScoresArray = userData.scores;
    var userScores;
    var friendsScoreArray = friends[i].scores;

    for (var i = 0; i < userScoresArray.length; i++) {
      userScores = userScoresArray[i] + userScoresArray[i];
    }
    console.log(userScores);

    var difference = 0;

    for (var j = 0; j < friendsScoreArray.length; j++) {
      friendsScore = friendsScoreArray[i] + friendsScoreArray[i];
    }
    console.log(friendsScore);


    // var userScores = parseInt(userScoresArray);

    // console.log(userScores);


    // for (var i = 0; i < surveyData.length; i++) {
    //   for (var j = 0; i < userScores.length; i++) {
    //     if (surveyData[i] === userScores[i]) {
    //       // COMPARE SUMS
    //     }
    //   }
    // }

    // if (userScores.length = 10) {
    //   for (var i =0; i < userScores.length; sum +=[i++]) {
    //     console.log(sumUserScores);
    //   }
    // }

    // console.log(userScores);


  

    // var difference;



    // // push user data into friends.js
    // // take best match 

    // // send name image as an object res.json to survey.html

    // // res.json(true)
    // // console.log(surveyData);
  });
};

// Convert the input data into an array of numbers

// Calculate the sum of the input data

// Compare the difference between current user data and saved data.

// Calculate the "totalDifference" (use absolute value)

// Determine the match

// Modal pop-up with name and picture