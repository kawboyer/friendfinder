 
 // DEPENDENCIES - the path package to get correct file paths
var path = require("path");


// ROUTING - HTML GET requests that will show the user an HTML page of content
module.exports = function(app) {

  // GET route that displays the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
  });

  // Default to the home page if no matching route is found
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });
};