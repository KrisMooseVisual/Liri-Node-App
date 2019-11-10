require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }

//   console.log(data); 
//   });

// capture imput that user puts in
var userImput = process.argv[2];

// Switch statement if userImput is "concert-this"

// Switch statement if userImput is "spotify-this-song"
// Switch statement if userImput is "movie-this"
// Switch statement if userImput is "do-what-it-is"

