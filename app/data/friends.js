module.exports.allFriends = [
{
	name: "Bill Nye",
	photo: "https://futurism.com/wp-content/uploads/2013/11/Bill-nye.jpg",
	scores: [3,5,2,5,3,1,5,5,1,1]
},
{
	name: "Han Solo",
	photo: "http://www.omega-level.net/wp-content/uploads/2017/11/ron-howard-reshot-han-solo-movie-all-of-it.jpg",
	scores: [1,2,3,1,1,4,5,5,4,4]
},
{
	name: "Darth Vader",
	photo: "https://c1.staticflickr.com/1/293/31189707794_d757e763c9_b.jpg",
	scores: [5,5,3,1,1,3,1,5,5,1]
}
{
	name: "Mr. Boringface",
	photo: "http://themidult.com/wp-content/uploads/2017/02/minion-bored-face-800x500.jpg",
	scores: [3,3,3,3,3,3,3,3,3,3]
}
];
module.exports.findFriend = function(val){
	var friends = module.exports.allFriends;
	var compare = val.scores;
	var friendDiff = [];
	var scoreDiff;
	var lowestDiff = 0;
	var indexFriend = 0;
	//Iterate through allFriends array
	for(var prsn in friends){
		scoreDiff = 0;
		//Iterate through each persons scores and get difference from user scores
		for(var i = 0; i < compare.length; i++){
			scoreDiff += Math.abs(compare[i] - friends[prsn].scores[i]);
		}
		//Push total score difference to array
		friendDiff.push(scoreDiff);
	}
	//Find lowest score difference
	lowestDiff = Math.min.apply(null, friendDiff);
	//Index of lowest score will be friend match
	indexFriend = friendDiff.indexOf(lowestDiff);
	//Add current user to list of friends
	friends.push(val);
	//Return the closest friend match
	return friends[indexFriend];
};