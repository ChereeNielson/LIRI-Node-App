// Require the .env File with Access Tokens to Read and Set Any Environment Variables with the dotenv Package //
require("dotenv").config();
require("axios");
require("moment");

// ---- API KEYS ---- //
let keys = require("./keys.js");

// ---- SPOTIFY ---- //
const spotify = require("node-spotify-api");

// ---- BANDS IN TOWN ---- //
let bit = keys.bit

// ---- OMDB ---- //
let omdb = keys.omdb

// ---- DO WHAT IS SAYS ---- //
const doWhatItSays = require("./commands/do-what-it-says");

// ---- HELP INFO ---- //
const help = require("./commands/help");


console.log(keys);
console.log(spotify);
console.log(bit);
console.log(omdb);


// Create a New Spotify Object //
let spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

// Default Settings Incase User Does Not Enter a Song Title //
let searchSettings = {
	type: "track",
	query: "Ace of Base The Sign",
	limit: 3
}


// Set Default Values for the OMDB Requests //
let omdb = {
	base: "http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}",
	type: "movie",
	t: "Fight Club"
}



let searchResults = process.argv[2];
let search = process.argv[3];


switch (searchResults) {
    case "spotify-this-song":
        {
            searchSpotify();
        }
        break;

    case "concert-this":
        {
            searchBands()
        }
        break;

    case "movie-this":
        {
            searchOMDB()
        }
        break;

    case "do-what-it-says":
        {
            sayWhat();
        }
        break;

    default:
        {
            console.log("no action found")
        }
}

function searchSpotify() {
    console.log(search);
}

function searchBands() {
    console.log(search);
}

function searchOMDB() {
    console.log(search);
}

function sayWhat() {
    console.log("say what?")
}



// ---- COMMANDS/LOGGER/OPTIONS ---- //
// Require only log_command from logger module //
const {log_command} = require("./commands/logger");
let command = process.argv[2];


