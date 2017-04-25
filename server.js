var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 8000;

app.get("/", function(reqest, response) {
  response.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(request, response) {
	response.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.listen(PORT, function() {
  console.log("Warming the reactors.");
});
