require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");


// capture imput that user puts in
var userImput = process.argv[2];
var userRequest = process.argv[3]; // everything index of 3 and higher.

console.log(userImput);

// Switch statement if userImput is "concert-this"
    // run API call using Axios to bands-in-town-API
    // inject user's search term in queryURL

     // display venue. location. date of event. (use moment to format date of event MM/DD/YYYY)

// Switch statement if userImput is "spotify-this-song"
    // using Node Spotify package info make call to spotify API
    // Disply to user:
        // •ARTIST
        // •SONGS NAME
        // •PREVIEW LINK FROM SPOTIFY
        // •ALBUM THAT SONG IS FROM
    // Provide default search term if user didn't provide arguement

// Switch statement if userImput is "movie-this"
    
    //

// Switch statement if userImput is "do-what-it-says"

// if not, then display message to the user saying "That does not compute, try again!"

