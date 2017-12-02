// Main application

// Start MySql Connection
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bacardi12312300",
    database: "JetBlue"
  });

// Test Connection  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});




// Reader
const fs = require('fs');

// Parser
const parser = require('./Parser')


// Read Deals
var filename = "Data/Deals.csv"
fs.readFile(filename, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
});


// Read LowestFares
var filename = "Data/LowestFares.csv"
fs.readFile(filename, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  // console.log(data);
  let parsed_data = JSON.parse(parser.csvToJSON(data));

  insertData("JetBlue", parsed_data);
});


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

function insertData(table, data){
    console.log(typeof data);
    // Insert for every entry
    var count = 1;
    data.forEach(function(element) {
        var values = valuesToString(element);
        var sql = "INSERT INTO "+ table +" VALUES ("+ values +")";
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(count + " record inserted");
            count++;
        }, this);
    });
}

