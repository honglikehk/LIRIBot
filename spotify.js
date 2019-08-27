require("dotenv").config();
const fs = require("fs");

const keys = require("./keys.js");

let commandLine = JSON.stringify(process.argv.join(" "));

let track = "";
// let spotify = new Spotify(keys.spotify);

// console.log(process.env.SPOTIFY_ID);
// console.log(process.env.SPOTIFY_SECRET);

const Spotify = require("node-spotify-api");
let Song = function() {
  this.findSong = function(track) {
    let spotify = new Spotify({
      id: process.env.SPOTIFY_ID,
      secret: process.env.SPOTIFY_SECRET
    });

    spotify
      .search({ type: "track", query: track })
      .then(function(response) {
        // console.log(response);
        const data = response.tracks.items[0];
        const output = `
  
        Command you typed: ${commandLine}
        Artist(s): ${data.artists[0].name}
        Song Name: ${data.name}
        Album: ${data.album.name}
        Preview Link: ${data.external_urls.spotify}`;

        console.log(output);
        fs.appendFile("log.txt", output + "\n\n================\n\n", err => {
          // If the code experiences any errors it will log the error to the console.
          if (err) {
            return console.log(err);
          }
          // Otherwise, it will print: "movies.txt was updated!"
          console.log("log.txt was updated!");
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  };
};
module.exports = Song;
