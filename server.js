
// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tell Node to create an "express" server
var app = express();

// Set initial port
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Convert the input data into an array of numbers

// Calculate the sum of the input data

// Compare the difference between current user data and saved data.
var isEqual = function (value, other) {
// 
  var valueLength = surveyArray;
  var otherLength = inputArray;
  
  if (valueLength !== otherLength) {
    return false
  }

  return true;
};
 
var surveyArray = [];
var inputArray = [];

for (var i = 0; i < surveyArray.length; i++) {
  for(var j = 0; i < (inputArray.scores).length; i++) {
    if (surveyArray[i] === inputArray[i]) {
      // COMPARE SUMS
    }
  }
}

// Calculate the "totalDifference" (use absolute value)

// Determine the match

// Modal pop-up with name and picture

// LISTENER - start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});