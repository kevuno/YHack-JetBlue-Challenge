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


// Given an object, return a string with just the values
function valuesToString(data){
    let final_string = "";
    let comma = "";
    for(var key in data){
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            final_string += comma + "'"+data[key]+"'";
            comma = ",";
        }
    }
    // console.log(final_string);
    return final_string;
}

module.exports.readFile = readFile;
module.exports.valuesToString = valuesToString;