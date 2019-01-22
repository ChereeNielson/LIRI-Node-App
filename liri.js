// Require the .env file with Access Tokens to Read and Set any Environment Variables with the dotenv Package //
require("dotenv").config();
// ---- AXIOS ---- //
let axios = require("axios");
// ---- MOMENT ---- //
let moment = require("moment");
// ---- SPOTIFY ---- //
let Spotify = require("node-spotify-api");
// ---- API KEYS ---- //
let keys = require("./keys.js");


// ---- Access the Keys in the .env file ---- //

// ---- BANDS IN TOWN ---- //
let bit = keys.bit.key;
// ---- OMDB ---- //
let omdb = keys.omdb.key;


// Create a New Spotify Object //
let spotify = new Spotify(keys.spotify);


// Capture arguments from the Command Line and store it in a Variable //
function firstRun() {
    let searchCommand = process.argv[2];
    let search = process.argv[3];
    searchDatabase(searchCommand, search)
}


// Create a Switch Function taking the Command Line argv or the random.text argv //
function searchDatabase(searchCommand, search) {
    switch (searchCommand) {
        case "spotify-this-song":
            {
                searchSpotify(search);
            }
            break;

        case "concert-this":
            {
                searchBands(search)
            }
            break;

        case "movie-this":
            {
                searchOMDB(search)
            }
            break;

        case "do-what-it-says":
            {
                sayWhat(search);
            }
            break;

        default:
            {
                console.log("no action found")
            }
    }
}


// Create the Functions for each Switch Item //

// SPOTIFY Search Function //
function searchSpotify(search) {
    spotify.search({
        type: "track",
        query: search
    }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }
        let response = data.tracks.items[0];
        console.log("Artist: " + response.artists[0].name);
        console.log("Song Name: " + response.name);
        console.log("URL: " + response.preview_url);
        console.log("Album: " + response.album.name);
    });
}

// BANDS IN TOWN Search Function //
function searchBands(search) {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=" + keys.bit.key)
        .then(function (response) {
            response = response.data;
            for (i = 0; i < response.length; i++) {
                console.log("Venue: " + response[i].venue.name);
                console.log("Location: " + response[i].venue.city);
                let convertedDate = moment(response[i].datetime, "YYYY-MM-DD").format("MM/DD/YYYY")
                console.log("Date: " + convertedDate);
                console.log("______________________");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

// OMDB Search Function //
function searchOMDB(search) {
    axios.get("http://www.omdbapi.com/?apikey=" + keys.omdb.key + "&t=" + search)
        .then(function (response) {
            if (search = "") {
                search = "Mr. Nobody"
            }
            response = response.data;
            console.log("Title: " + response.Title);
            console.log("Release Year: " + response.Year);
            console.log("IMDB Rating: " + response.Ratings[0].Value);
            console.log("Rotten Tomatoes: " + response.Ratings[1].Value);
            console.log("Filmed in Country: " + response.Country);
            console.log("Film Language: " + response.Language);
            console.log("Plot: " + response.Plot);
            console.log("Actors: " + response.Actors);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// FS Read File random.text SAY WHAT Function //
function sayWhat() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        let dataArr = data.split(",");
        let searchCommand = dataArr[0];
        let search = dataArr[1];
        searchDatabase(searchCommand, search)
    })
    console.log(sayWhat);
}


// RUN PROGRAM //
firstRun()