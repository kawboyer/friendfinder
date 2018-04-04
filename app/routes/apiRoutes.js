
// LOAD DATA 
// Link the route to a data source holding arrays of information on survey responses
var surveyData = require("../data/friends");
// console.log(surveyData);

// // Convert the input data into an array of numbers

// // Calculate the sum of the input data

// // Compare the difference between current user data and saved data.
// var isEqual = function (value, other) {
//   // 
//     var valueLength = surveyArray;
//     var otherLength = inputArray;

//     if (valueLength !== otherLength) {
//       return false
//     }

//     return true;
//   };

//   var surveyArray = [];
//   var inputArray = [];



//   // Calculate the "totalDifference" (use absolute value)

//   // Determine the match

//   // Modal pop-up with name and picture

// ROUTING
module.exports = function (app) {

  // API GET request 
  // Display a JSON of the survey data in the table (all possible friends)
  app.get("/api/friends", function (req, res) {
    res.json(surveyData);
  });

  // API POST request
  // When a user submits form data (a JSON object), push the form data to the server and save it.
  app.post("/api/friends", function (req, res) {
    // console.log("apiRoutes");

    var userData = req.body;
    var userScores = userData.scores;

    // var sumUserScores = userScores.reduce(function (userScores, b) {
    //   return userScores + b;
    //   }, 0
    // );
    console.log(userScores);

    var difference;

    for (var i = 0; i < surveyData.length; i++) {
      for (var j = 0; i < (userScores).length; i++) {
        if (surveyData[i] === userScores[i]) {
          // COMPARE SUMS
        }
      }
    }

    // push user data into friends.js
    // take best match 

    // send name image as an object res.json to survey.html

    // res.json(true)
    // console.log(surveyData);
  });
};
