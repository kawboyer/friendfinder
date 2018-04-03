
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

// LISTENER - start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// OBS!!!!!!!
// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match. 