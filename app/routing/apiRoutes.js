var friends = require("../data/friends.js");


//Routes to export
module.exports = function(app){
	//API routes
	app.post("/api/friends", function(req, res){
		var newFriend = req.body;
		res.json(friends.findFriend(newFriend));
	});

	app.get("/api/friends", function(req, res){
		res.json(friends.allFriends);
	});

};