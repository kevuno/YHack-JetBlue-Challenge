// Main application


// Database
const db = require('./Database');
const con = db.connect("localhost", "root", "Bacardi12312300", "JetBlue");

// Seeder (only used if a new csv is loaded)
const seeder = require('./Seeder');

var readAndInsertLowestFares = false;
if(readAndInsertLowestFares){
    // Seed the database
    seeder.seedLowestFares("Data/LowestFares.csv");
}

var readAndInsertAirports = false;
if(readAndInsertAirports){
    // Seed the database
    seeder.seedAirportLocations("Data/airportlocations.csv");
}

var readAndInsertLanguages = false;

if(readAndInsertLanguages){

    // Seed the database
    seeder.seedLanguages("Data/CountryLanguage.csv");
}





/** -- Express Server -- **/

// Express lib
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTION');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});

app.post('/', function(req, res){
    var flight_params = {
        origin:  "'"+ req.body.origin +"'",
        destination:  "'%'",
        price_min: req.body.price_min,
        price_max: req.body.price_max,
        isDomestic: req.body.isDomestic,
        isUber: req.body.isUber,
    }
    console.log(flight_params);

    db.selectFlights(con, flight_params, function(result){
        res.send(result);
    });
    
});

