//requre some data
var friendList = require("../data/friends");


module.exports = function(app) {
//display all the people
  app.get("/api/friends", function(req, res) {
    res.json(friendList);
  });

//add to the people
  app.post("/api/friends", function(req, res) {

      friendList.push(req.body);
      res.json(true);
    
  });

};