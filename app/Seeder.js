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
    // When parsing, it also generates a random temperature
    let parsed_data = reader.readFile(filename, function(parsed_data){
        parsed_data = addRandomTemperature(parsed_data);
        parsed_data = addRandomDailyCost(parsed_data);
        console.log(parsed_data);
        db.insertData("AirportLocations", con,  parsed_data);
        console.log("file: " + filename + " read and db populated correctly");
    });
}

// Inserts a temperature filed with a random value between -5 and 30 to every object in the data set
function addRandomTemperature(data_set){
    data_set.forEach(function(element) {
        element.Temperature = Math.floor(Math.random() * 30) - 10; 
    }, this);
    return data_set;

}

// Inserts a cost of  filed with a random value between -5 and 30 to every object in the data set
function addRandomDailyCost(data_set){
    data_set.forEach(function(element) {
        element.DailyCost = Math.floor(Math.random() * 150) - 20; 
    }, this);
    return data_set;

}


module.exports.seedLowestFares = seedLowestFares;
module.exports.seedAirportLocations = seedAirportLocations;
    

