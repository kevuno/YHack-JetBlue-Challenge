// Seeder.js

// DB connection
const db = require('./Database');
const con = db.connect("localhost", "root", "Bacardi12312300", "JetBlue");

// File Reader (user Parser.js)
const reader = require('./Reader');

// Loads a csv file with the flight data and parses it into an array of objects.
//  Then it inserts the each object as a row in the db
function seedLowestFares(filename){
    // Read csv file, parse into an object and then insert values into table JetBlue
    let parsed_data = reader.readFile(filename, function(parsed_data){
        db.insertData("JetBlue", con,  parsed_data);
        console.log("file: " + filename + " read and db populated correctly");
    });
}



// Loads a csv with the aiports and cities and parses it into an array of objects.
//  Then it inserts the each object as a row in the db
function seedAirportLocations(filename){
    // Read csv file, parse into an object and then insert values into table JetBlue
    let parsed_data = reader.readFile(filename, function(parsed_data){
        db.insertData("AirportLocations", con,  parsed_data);
        console.log("file: " + filename + " read and db populated correctly");
    });
}


module.exports.seedLowestFares = seedLowestFares;
module.exports.seedAirportLocations = seedAirportLocations;
    

