// Database.js

// Mysql - lib
const mysql = require('mysql');


// Connects to a given database
function connect(host, user, password, database){
    // Start MySql Connection
    var con = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });

    // Test Connection  
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    return con;
}


/* ---- Insert functions ---- */

// Inserts values of data from an array of Objects
function insertData(table, connection, data){
    // Insert for every entry
    var count = 1;

    data.forEach(function(object) {
        // Get a string representation of the current object
        var values = valuesToString(object);
        var sql = "INSERT INTO "+ table +" VALUES ("+ values +")";

        // console.log(sql);
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(count + " record inserted");
            count++;
        }, this);
    });
}

/* ---- Select functions ---- */
function selectData(connection, select_data, callback){
    console.log(select_data);
    var selects = select_data.selects;
    var from_table =  select_data.from_table;
    var join_table = select_data.join_table;
    var join_clause = select_data.join_clause;
    var where_clause = select_data.where_clause;

    var sql = "SELECT " + selects + " FROM " + from_table + "\
                JOIN " + join_table + " ON " + join_clause + "\
                WHERE " + where_clause + ";";

    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        callback(result);
    }, this);
}

function selectFlights(connection, flight_params, callback){
    var select_data = {
        selects: "*",
        from_table: "JetBlue",
        join_table: "AirportLocations",
        join_clause: "JetBlue.Destination = AirportLocations.Airport",
        where_clause: "(Origin like '%' \
                        AND Destination like '%'\
                        AND IsDomesticRoute = " + flight_params.isDomesticRoute  + "\
                        )"

    }

    return selectData(connection, select_data, callback);
}


module.exports.connect = connect;
module.exports.insertData = insertData;
module.exports.selectData = selectData;
module.exports.selectFlights = selectFlights;






/* ---- Utility functions ---- */


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