const mysql = require("mysql");


const connection = mysql.createConnection({
  host: '127.0.0.1:7002',
  port: 7002,
  user: "root",
  password: "Gcm9jg=gk3b8",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;