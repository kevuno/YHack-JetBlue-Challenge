// CSV Reader.js

// Reader lib
const fs = require('fs');

// CSV Parser
const parser = require('./Parser');


// Read LowestFares. Returns a JSON Object
function readFile(filename, callback){
    fs.readFile(filename, 'utf8', function (err,data) {
        if(err){
            return console.log(err);
        }
        return callback(JSON.parse(parser.csvToJSON(data)));    
    });
}

module.exports.readFile = readFile;