// Main application

// Reader
const fs = require('fs');


// Parser
const parser = require('./Parser')

var filename = "Data/Deals.csv"



fs.readFile(filename, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  console.log(parser.csvToJSON(data));
});



