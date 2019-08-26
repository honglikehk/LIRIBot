const axios = require("axios");
const fs = require("fs");

let commandLine = JSON.stringify(process.argv.join(" "));

let URL;

let film = "";

let Movie = function() {
  this.findMovie = function(film) {
    // The following URL can be used to search the TV Maze API for a given show
    URL = "http://www.omdbapi.com/?t=" + film + "&y=&plot=short&apikey=trilogy";
    axios.get(URL).then(response => {
      const title = response.data;
      const output = `

      Command you typed: ${commandLine}
      Title: ${title.Title}
      Year: ${title.Year}
      Imbd Rating: ${title.imbdRating}
      Rotten Tomatoes Rating: ${title.Ratings[1].Value}
      Country Produced: ${title.Country}
      Languages of the movie: ${title.Language}
      Plot of the movie: ${title.Plot}
      Actors: ${title.Actors}`;

      console.log(output);
      fs.appendFile("log.txt", output + "\n\n================\n\n", err => {
        // If the code experiences any errors it will log the error to the console.
        if (err) {
          return console.log(err);
        }
        // Otherwise, it will print: "movies.txt was updated!"
        console.log("log.txt was updated!");
      });
    });
  };
};

module.exports = Movie;
