// Read and set any environment variables with the dotenv package //
// Require the .env file with access tokens //
require("dotenv").config();


// ---- SPOTIFY ---- //
const spotify = require("./commands/spotify");

// ---- BANDS IN TOWN ---- //
const bands = require("./commands/bands");

// ---- OMDB ---- //
const omdb = require("./commands/omdb");

// ---- DO WHAT IS SAYS ---- //
const doWhatItSays = require("./commands/do-what-it-says");

// ---- HELP INFO ---- //
const help = require("./commands/help");


// Required to import the `keys.js` file and store it in a variable //
let keys = require("./keys.js");

// Access your keys information //
let spotify = new Spotify(keys.spotify);


// ---- COMMANDS/LOGGER/OPTIONS ---- //
// Require only log_command from logger module //
const {log_command} = require("./commands/logger");
let command = process.argv[2];