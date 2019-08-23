require("dotenv").config();
// let keys = require("./keys.js");
// let spotify = new Spotify(keys.spotify);

// Grab search command line argument
let apiCommand = process.argv[2];
let search = process.argv[3];

// Joining the remaining arguments since an movie name may contain spaces
let term = process.argv.slice(4).join(" ");

switch (apiCommand) {
  case "concert-this":
    console.log("bahahah");
    break;
  case "spotify-this-song":
    console.log("boo!");
    break;
  case "movie-this":
    // OMDB COMMANDS
    const movies = require("./omdb.js");
    // Create a new TV object
    let movie = new movies();
    // By default, if no search type is provided, search for a tv show
    if (!search) {
      search = "film";
    }

    // By default, if no search term is provided, search for "Andy Griffith"
    if (!term) {
      term = "Mr. Nobody";
    }
    // Print whether searching for a show or actor, print the term as well
    if (search === "film") {
      console.log("Searching for Movie");
      movie.findMovie(term);
    }
    break;
  case "do-what-it-says":
    console.log("yay!");
    break;
  default:
    console.log("Invalid command, sorry! Please try again!");
}
