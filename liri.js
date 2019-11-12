require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

//adding moment for date of events
var moment = require("moment");
moment().format();

var fs = require("fs");


// grabs input that user puts in
var userCommand = process.argv[2];// will capture "movie-this, concert-this, 'do what it says', and 'spotify' "
var userRequest = process.argv[3]; // everything index of 3 and higher.
var userFind = ''; // will capture 3 and above
console.log(userCommand);
console.log(userRequest);

//Usig Axios for movie-this section.
// storing all arguements in array
var movieName = process.argv;

//Empty variable for movie names
var movieName = "";

//Request through axios to OMDB API
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
console.log(queryUrl);

axios.get(queryUrl).then(
    function (response) {
        console.log("Title: " + response.data.movieName);

        console.log("Release Year: " + response.data.Year);

        console.log("IMDB Rating: " + response.data.Rating);

        console.log("Rotten Tomatoes Rating: " + response.data.rottenTomatoesRating);

        console.log("Country: " + response.data.Country);

        console.log("Language: " + response.data.Language);

        console.log("Plot: " + response.data.Plot);

        console.log("Cast: " + response.data.Cast);
    });

//For loop for node arguments 
for (var i = 3; i < userRequest.length; i++) {

    if (i > 3 && i < userRequest.length) {
        userFind = userFind + "+" + userRequest[i];
    }
    else {
        userFind += userRequest[i];
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Break for Peace~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Switch statement if userImput is "concert-this"
// run API call using Axios to bands-in-town-API
// inject user's search term in queryURL
switch (userFind) {
    case "concert-this":
        if (!userFind) {
            userFind = ("Korn");
        }
        concertThis(userFind);
        break;

    // inject user's search term in queryURL
    // display venue. location. date of event. (use moment to format date of event MM/DD/YYYY)


    // Switch statement if userImput is "spotify-this-song"
    // using Node Spotify package info make call to spotify API
    case "spotify-this-song":
        console.log("Command: " + userCommand);
        console.log("Find: " + userFind);
        if (!userFind) {
            //Default song Dazed and Confused by Led Zepplin
            userFind = "Dazed and Confused (Led Zepplin)";
        }
        spotifyThisSong(userFind);
        break;

    // Disply to user:
    // var spotifyList
    // •ARTIST
    // •SONGS NAME
    // •PREVIEW LINK FROM SPOTIFY
    // •ALBUM THAT SONG IS FROM

    // Switch statement if userInput is "movie-this"
    case "movie-this":
        console.log("Command: " + userCommand);

        console.log("Find: " + userFind)
        // Provide default search term if user didn't provide arguement 'Black Dynomite' as default movie.

        if (userCommand === "movie-this") {
            movieThis(userFind);
        }
        else if (!userSearch) {
            userSearch = "Black+Dynomite"
            userMovie(userSearch);
        }
        break;

    // Switch statement if userImput is "do-what-it-says"
    case "do-what-it-says":
        console.log("Command: " + userCommand);
        console.log("Find: " + userFind);
        console.log("Command " + userCommand);
        doWhatItSays();
        break;
    // if not, then display message to the user saying "That does not compute, try again!"
    default:
        console.log("That does not compute. Try again!")
};



