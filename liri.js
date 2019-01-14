// Require the .env file with access tokens //
require('dotenv').config();

// ---- SPOTIFY ---- //
const spotify = require('./commands/spotify');

// ---- BANDS IN TOWN ---- //
const bands = require('./commands/bands');

// ---- OMDB ---- //
const omdb = require('./commands/omdb');

// ---- DO WHAT IS SAYS ---- //
const doWhatItSays = require('./commands/do-what-it-says');

// ---- HELP INFO ---- //
const help = require('./commands/help');

// ---- COMMANDS/LOGGER/OPTIONS ---- //
// Require only log_command from logger module //
const {log_command} = require('./commands/logger');
let command = process.argv[2];