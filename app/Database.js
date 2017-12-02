// Database.js

// Mysql - lib
const mysql = require('mysql');

// Connects to a given database
function connect(host, user, password, database){
    console.log(host, user, password, database);
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

// Inserts values of data from an array of Objects
function insertData(table, data){
    // Insert for every entry
    var count = 1;
    data.forEach(function(element) {
        var values = reader.valuesToString(element);
        var sql = "INSERT INTO "+ table +" VALUES ("+ values +")";
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(count + " record inserted");
            count++;
        }, this);
    });
}

module.exports.connect = connect;
module.exports.insertData = insertData;