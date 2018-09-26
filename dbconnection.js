const mysql = require("mysql");

// Create Connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "slatedb"
    
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql Connected...")
});

module.exports = db;