var path = require("path");
var express = require("express");
var app = express();
module.exports = function(app) {

app.get("/", function(reqest, response) {
  response.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/survey", function(request, response) {
  response.sendFile(path.join(__dirname, "/../public/survey.html"));
});

// If no matching route is found default to home
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});
  
};