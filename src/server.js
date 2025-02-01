require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST;
const mysql = require("mysql2");

const confgigViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

confgigViewEngine(app);
app.use("/", webRouter);

//Test connection

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'minhnva',
  
});


//simple query
connection.query(
  'SELECT * FROM Users',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
