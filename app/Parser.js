// Returns an array of objects 
var dateFormat = require('dateformat');

function csvToJSON(csv){
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split(",");
        for(var j=0;j<headers.length;j++){

            // Make sure to format the date
            if(headers[j] == "FlightDate"){
                obj[headers[j]] = dateFormat(new Date(currentline[j]), "yyyy-mm-dd hh:mm:ss");    
            }else{
                obj[headers[j]] = currentline[j];
            }
        }
        result.push(obj);
    }

    return JSON.stringify(result); //JSON
}

module.exports.csvToJSON = csvToJSON

// Test Deals
function testDeals(){
    let file = "Deals.csv";
    console.log("Reading " + file + "...");
    console.log(csvJSON(readFile('Deals.csv')));
}

// Test LowestFares
function testDeals(){
    let file = "LowestFares.csv";
    console.log("Reading " + file + "...");
    console.log(csvJSON(readFile(file)));
}