const mysql = require('mysql');
// Connection for SQL database
module.exports = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'Beavertrapper69.',
    database: 'castleKeeper_db'
  });