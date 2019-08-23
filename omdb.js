const axios = require("axios");
const fs = require("fs");

let URL;

let film = "";

let Movie = function() {
  this.findMovie = function(film) {
    // The following URL can be used to search the TV Maze API for a given show
    URL = "http://www.omdbapi.com/?t=" + film + "&y=&plot=short&apikey=trilogy";
    axios.get(URL).then(response => {
      console.log(response.data);
      console.log("This works!!");
      //   const { name, genres, rating, network, summary } = response.data;
      //   const output = `
      //   name: ${name}
      //   genre: ${genres.join(",")}
      //   average rating: ${rating.average}
      //   network name ${network.name}
      //   summary ${summary}`;
      //   fs.appendFile("log.txt", output + "\n\n================\n\n", err => {
      //     // If the code experiences any errors it will log the error to the console.
      //     if (err) {
      //       return console.log(err);
      //     }
      //     // Otherwise, it will print: "movies.txt was updated!"
      //     console.log("log.txt was updated!");
      //   });
    });
  };
};

module.exports = Movie;
