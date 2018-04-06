
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
    var userScores = 0;
    
    var totalScore = [];
  

    for (var i = 0; i < userScoresArray.length; i++) {
      userScores += parseInt(userScoresArray[i]);
      console.log(userScores);
    }
    console.log("User score: " + userScores);

    var difference = 0;

    for (var j = 0; j < friends.length; j++) {
      var friendsScore = 0;
      for (var k = 0; k < friends[j].scores.length; k++) {
        friendsScore += parseInt(friends[j].scores[k]);
      }
      totalScore.push(friendsScore);
      console.log("Friends score: " + friendsScore);
    }
    console.log(totalScore);

    // function
    // runb for loop through the totalscore

    //smallest difference

    // determine the person that belongs to

    

   
  });
};