
// LOAD DATA 
// Link the route to a data source holding arrays of information on survey responses
var surveyData = require("../data/surveyData");

// ROUTING
module.exports = function(app) {

  // API GET request 
  // Display a JSON of the survey data in the table (all possible friends)
  app.get("api/friends", function(req, res) {
    res.json(surveyData);
  });

  // API POST request
  // When a user submits form data (a JSON object), push the form data to the server and save it.
  app.post("/api/friends", function(req, res) {
    surveyData.push(req.body);
    // res.json(true)
  });
};