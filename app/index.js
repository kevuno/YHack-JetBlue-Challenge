// Main application


// Database
const db = require('./Database');
const con = db.connect("localhost", "root", "Bacardi12312300", "JetBlue");


var read = true;

if(read){
    // Reader
    const reader = require('./Reader');

    // Read csv file, parse into an object and then insert values into table JetBlue
    var filename = "Data/LowestFares.csv"
    let parsed_data = reader.readFile(filename, function(parsed_data){
        db.insertData("JetBlue", parsed_data);
    });
}