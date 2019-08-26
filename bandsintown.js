const moment = require("moment");

const axios = require("axios");
const fs = require("fs");

let commandLine = JSON.stringify(process.argv.join(" "));

let URL;

let artist = "";

let Concert = function() {
  this.findConcert = function(artist) {
    URL =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=codingbootcamp";
    axios.get(URL).then(response => {
      const nextConcert = response.data[0];
      let concertDAT = moment(nextConcert.datetime).format(
        "MMMM Do YYYY, h:mm:ss a"
      );
      const output = `
        Command you typed: ${commandLine}
        Date and time of Concert: ${concertDAT}
        Name of Venue: ${nextConcert.venue.name}
        Locaton of Venue: ${nextConcert.venue.city}, ${
        nextConcert.venue.region
      }, ${nextConcert.venue.country}`;

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

module.exports = Concert;
