require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

//adding moment for date of events
//var moment = require("moment");

//reading and writing files
//var fs = require("fs");


// capture imput that user puts in
// var userInput = process.argv[2];
// var userRequest = process.argv[3]; // everything index of 3 and higher.
// console.log(userInput);
// console.log(userRequest);


// Switch statement if userImput is "concert-this"
// run API call using Axios to bands-in-town-API
// inject user's search term in queryURL
// switch (userInput) {
//     case "concert-this":
//         concertThis();
//         break;

// inject user's search term in queryURL
// display venue. location. date of event. (use moment to format date of event MM/DD/YYYY)
// var moment = require('moment');
// moment().format();


// Switch statement if userImput is "spotify-this-song"
// using Node Spotify package info make call to spotify API
// case "spotify-this-song":
//     spotifyThisSong();
//     break;

// Disply to user:
// var spotifyList = 
// •ARTIST
// •SONGS NAME
// •PREVIEW LINK FROM SPOTIFY
// •ALBUM THAT SONG IS FROM

// Provide default search term if user didn't provide arguement

// Switch statement if userImput is "movie-this"
// case "movie-this":
//     movieThis();
//     break;
//

// Switch statement if userImput is "do-what-it-says"
// case "do-what-it-says":
//     doWhatItSays();
//     break;
// if not, then display message to the user saying "That does not compute, try again!"
//     default:
//         noArguement("That does not compute. Try again!")
// };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Break for Peace~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Usig Axios for movie-this section.
// storing all arguements in array
var nodeArgs = process.argv;

//Empty variable for movie names
var movieName = "";

//For loop for node arguments 
for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];
    }
}

//Request through axios to OMDB API
var queryUrl = "http://www.omdbapi.com/?i=" + movieName + "tt3896198&apikey=4aa82962";
console.log(queryUrl);

axios.get(queryUrl).then(
    function (response) {
        console.log("Release Year: " + response.data.Year);
    })
    .catch(function (error) {
        if (error.response) {
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        }
        else if (error.request); {
            console.log(error.request);
        }
        else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
