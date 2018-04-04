
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