var path = require("path");

module.exports = function(app){
	app.get("/", function(req,res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/images/concrete-texture.png", function(req, res){
		res.sendFile(path.join(__dirname, "../images/concrete-texture.png"));
	});

	app.get("*", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

};