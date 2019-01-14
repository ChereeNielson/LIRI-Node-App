# LIRI (Language Interpretation and Recognition Interface) 

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line Node application that takes in parameters (via command line arguments or file input) to search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

---------------------------
[![NPM](https://nodei.co/npm/liri-cli.png)](https://www.npmjs.com/package/liri-cli)

[![npm version](https://badge.fury.io/js/liri-cli.svg)](https://www.npmjs.com/package/liri-cli)
[![npm](https://img.shields.io/npm/dt/liri-cli.svg)](https://www.npmjs.com/package/liri-cli)
[![GitHub last commit](https://img.shields.io/github/last-commit/jeffreylowy/liri-node-app.svg)](https://github.com/jeffreylowy/liri-node-app)

## Table of Contents

- [LIRI Commands](#liri-commands)
- [API Keys](#api-keys)
- [Install and Run via NPM](#install-and-run-via-npm)
- [Resources](#resources)

---------------------------

### LIRI Commands

`node ./liri [spotify, artist, movie, do] <value> (--say)`

**Command**|**Value**|**Options**|**Example**|**Description**
:-----:|:-----:|:-----:|:-----:|:-----:
spotify|"song title"|-|node liri "Madness"|Display song information from Spotify. The default song is "Madness" if no value is entered via the command line.
artist|"band name"|-|node liri "Muse"|Display band information from Bands In Town. The default artist is "Muse" if no value is entered via the command line.
movie|"movie title"|-|node liri "Fight Club"|Display movie information from OMDB.
do-what-it-says|-|-|node liri do-what-it-says|Run whatever command and value are saved to the random.txt file.

You can also run via npm scripts.

`npm run [spotify, artist, movie, do] <value>`

### API Keys

* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

* [Axios](https://www.npmjs.com/package/axios)

* Use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

* [Moment](https://www.npmjs.com/package/moment)

* [DotEnv](https://www.npmjs.com/package/dotenv)

Rather than include a `keys.js` file, I used the [dotenv](https://www.npmjs.com/package/dotenv) package to create environment variables. The `.env` file is the first file required in `./liri.js`, which stores environment-specific variables in the form of `NAME=VALUE`.

Replace XXXXX with the key/secret/token for each service.

```
SPOTIFY_ID=XXXXX
SPOTIFY_SECRET=XXXXX
BIT_KEY=XXXXX
OMDB_KEY=XXXXX
```
`process.env` now has the keys and values defined in the `.env` file

```javascript
let spotify = new Spotify({
	id: process.env.SPOTIFY_CLIENT_ID,
	secret: process.env.SPOTIFY_CLIENT_SECRET,
});
```

For more information, visit the NPM page for the [dotenv](https://www.npmjs.com/package/dotenv) package.

### Install and Run via NPM

This project was uploaded to NPM under the package name `liri-cli`. Though I hope to get there, the package is not yet ready to be installed globally.

Install: `npm i liri-cli`

### Resources 

[Node docs: child_process.spawn](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)

[MDN: Number.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

[MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

[Carbon: Source code images](https://carbon.now.sh/)

[Cheree Nielson: GitHub](https://github.com/ChereeNielson/LIRI-Node-App)