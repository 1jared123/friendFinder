var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 8000;

app.use(express.static(__dirname + "/app"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//we listening to you...
app.listen(PORT, function() {
  console.log("Reactors primed. Fire when ready.");
});
