// Main application


// Database
const db = require('./Database');
const con = db.connect("localhost", "root", "Bacardi12312300", "JetBlue");


var readAndInsertLowestFares = false;
if(readAndInsertLowestFares){
    // Seeder (only used if a new csv is loaded)
    const seeder = require('./Seeder');

    // Seed the database
    seeder.seedLowestFares("Data/LowestFares.csv");
}

var readAndInsertAirports = true;
if(readAndInsertAirports){
    // Seeder (only used if a new csv is loaded)
    const seeder = require('./Seeder');

    // Seed the database
    seeder.seedAirportLocations("Data/airportlocations.csv");
}



/** -- Express Server -- **/

// Express lib
const express = require('express');
const app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTION');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/origins/:origin/destinations/:destination', function(req, res){
    console.log(req.params);
    var flight_params = {
        origin:  "'"+ req.params.origin +"'",
        destination:  "'"+ req.params.destination +"'",
        data: "",
        price_low: "",
        price_high: "",
        isDomesticRoute: 1
    }

    db.selectFlights(con, flight_params, function(result){
        res.send(result);
    });
    
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});
