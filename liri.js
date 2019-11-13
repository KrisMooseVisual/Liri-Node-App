require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

//adding moment for date of events
var moment = require("moment");


var fs = require("fs");

//-----END KEYS----//


// grabs input that user puts in
var userCommand = process.argv[2];// will capture "movie-this, concert-this, 'do what it says', and 'spotify' "

var nodeArgs = process.argv;

var userRequest = ""; // everything index of 3 and higher.

//For loop for node arguments
for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        userRequest = userRequest + "+" + nodeArgs[i];
    }
    else {
        userRequest += nodeArgs[i];
    }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Break for Peace~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Switch statement if userImput is "concert-this"
// run API call using Axios to bands-in-town-API
// inject user's search term in queryURL
switch (userCommand) {
    case "concert-this":
        //Request through axios to OMDB API
        var queryUrl = "https://rest.bandsintown.com/artists/" + userRequest + "/events?app_id=codingbootcamp";
        // inject user's search term in queryURL
        console.log(queryUrl);

        axios.get(queryUrl).then(
            function (userRequest) {
                console.log("Venue: " + userRequest.data[0].venue.name);
                console.log("City: " + userRequest.data[0].venue.city);
                // display venue. location. date of event. (use moment to format date of event MM/DD/YYYY)
                console.log(moment(userRequest.data[0].datetime).format("MM/DD/YYYY"));

            });
        break;


    // Switch statement if userImput is "spotify-this-song"
    // using Node Spotify package info make call to spotify API
    case "spotify-this-song":
    //console.log("This is the spotify switch case");
      spotify.search({ type: 'track', query: userRequest }, 
      function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        //console.log(data.tracks.items);
       // Disply to user:
       for (var i= 0; i < data.tracks.items.length; i++) {
            var spotifyData = data.tracks.items[i];
            var previewURL = "Not available";
            if (spotifyData.preview_url !== null) {
                previewURL = spotifyData.preview_url;
            }

            // •ARTIST
            var songData = "Artist: " + spotifyData.artists[0].name + 
            // •SONGS NAME 
            "\n Song: " + spotifyData.name + 
            // •PREVIEW LINK FROM SPOTIFY
            "\n Spotify Link: " + previewURL + 
            // •ALBUM THAT SONG IS FROM
            "\n Album: " + spotifyData.album.name;

      console.log(songData);
       } 
      });
       break;
        

    // Switch statement if userInput is "movie-this"
    case "movie-this":
        //Request through axios to OMDB API
        var queryUrl = "http://www.omdbapi.com/?t=" + userRequest + "&y=&plot=short&apikey=trilogy";
        console.log(queryUrl);

        axios.get(queryUrl).then(
            function (response) {
                console.log("Title: " + response.data.Title);

                console.log("Release Year: " + response.data.Year);

                console.log("IMDB Rating: " + response.data.imdbRating);

                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);

                console.log("Country: " + response.data.Country);

                console.log("Language: " + response.data.Language);

                console.log("Plot: " + response.data.Plot);

                console.log("Actors: " + response.data.Actors);

                // Provide default search term if user didn't provide arguement 'Black Dynomite' as default movie



            });
        break;


    // Switch statement if userImput is "do-what-it-says"
    case "do-what-it-says":
        console.log("Command: " + userCommand);
        console.log("Find: " + userRequest);
        console.log("Command " + userCommand);
        doWhatItSays();
        break;
    // if not, then display message to the user saying "That does not compute, try again!"
    default:
        console.log("That does not compute. Try again!")
}




