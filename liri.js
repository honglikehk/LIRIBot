// Grab search command line argument
const fs = require("fs");
let apiCommand = process.argv[2];
let search = process.argv[3];

// Joining the remaining arguments since an movie name may contain spaces
let term = process.argv.slice(3).join(" ");

let bandsAPI = function(search, term) {
  // BANDS IN TOWN COMMAND
  const concerts = require("./bandsintown.js");
  // Create a new TV object
  let concert = new concerts();
  // By default, if no search type is provided, search for a artist
  if (!search) {
    search = "artist";
  }

  // By default, if no search term is provided, search for "Maroon 5"
  if (!term) {
    term = "Maroon 5";
  }
  // Print whether searching for a artist and/or band, print the term as well
  if (search === "artist") {
    console.log("Searching for concerts");
    concert.findConcert(term);
  } else {
    console.log("Searching for concerts");
    concert.findConcert(term);
  }
};

let spotifyAPI = function(search, term) {
  // SPOTIFY COMMANDS
  const songs = require("./spotify.js");
  // Create a new song object
  let song = new songs();

  // By default, if no search type is provided, search for a movie
  if (!search) {
    search = "track";
  }

  // By default, if no search term is provided, search for "Mr.Nobody"
  if (!term) {
    term = "Thank u, next";
  }
  // Print whether searching for a show or actor, print the term as well
  if (search === "track") {
    console.log("Searching for Song");
    song.findSong(term);
  } else {
    console.log("Searching for song");
    song.findSong(term);
  }
};

let omdbAPI = function(search, term) {
  // OMDB COMMANDS
  const movies = require("./omdb.js");
  // Create a new TV object
  let movie = new movies();

  // By default, if no search type is provided, search for a movie
  if (!search) {
    search = "film";
  }

  // By default, if no search term is provided, search for "Mr.Nobody"
  if (!term) {
    term = "Mr. Nobody";
  }
  // Print whether searching for a show or actor, print the term as well
  if (search === "film") {
    console.log("Searching for Movie");
    movie.findMovie(term);
  } else {
    console.log("Searching for Movie");
    movie.findMovie(term);
  }
};

switch (apiCommand) {
  case "concert-this":
    bandsAPI(search, term);
    break;
  case "spotify-this-song":
    spotifyAPI(search, term);
    break;
  case "movie-this":
    omdbAPI(search, term);
    break;
  case "do-what-it-says":
    fs.readFile("random.txt", "utf8", function(error, data) {
      // If the code experiences any errors it will log the error to the console.
      if (error) {
        return console.log(error);
      }

      // Then split it by commas (to make it more readable)
      let dataArr = data.split(" ");

      search = dataArr[0];
      term = dataArr.splice(1).join(" ");
      // We will then re-display the content as an array for later use.
      spotifyAPI(search, term);
    });
    break;
  default:
    console.log(
      "Invalid command, sorry! Please concert-this, spotify-this-song, movie-this and/or do-what-it-says."
    );
}
