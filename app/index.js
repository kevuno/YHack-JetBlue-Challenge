// Main application

// Start MySql Connection
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bacardi12312300"
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
  // console.log(data);
  // console.log(parser.csvToJSON(data));
});


// Read LowestFares
var filename = "Data/LowestFares.csv"
fs.readFile(filename, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // console.log(data);
  // console.log(parser.csvToJSON(data));
});


