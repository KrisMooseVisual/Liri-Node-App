require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

//reading and writing files
var fs = require("fs");


// capture imput that user puts in
var userImput = process.argv[2];
var userRequest = process.argv[3]; // everything index of 3 and higher.
console.log(userImput);


// Switch statement if userImput is "concert-this"
switch (userImput) {

    case "concert-this":
       concertThis();
        break;
    // run API call using Axios to bands-in-town-API
    // inject user's search term in queryURL
     // display venue. location. date of event. (use moment to format date of event MM/DD/YYYY)

// Switch statement if userImput is "spotify-this-song"
// using Node Spotify package info make call to spotify API
    case "spotify-this-song":
        spotifyThisSong();
        break;
    
        // Disply to user:
    var spotifyList
        // •ARTIST
        // •SONGS NAME
        // •PREVIEW LINK FROM SPOTIFY
        // •ALBUM THAT SONG IS FROM

    // Provide default search term if user didn't provide arguement

// Switch statement if userImput is "movie-this"
    case "movie-this":
        movieThis();
        break;
    //

// Switch statement if userImput is "do-what-it-says"
    case "do-what-it-says":
        doWhatItSays();
        break;
// if not, then display message to the user saying "That does not compute, try again!"
default:
        noArguement ("That does not compute. Try again!")
};
