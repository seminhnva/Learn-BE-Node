require("dotenv").config();

const mysql = require("mysql2");
//Test connection

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3307,
//   user: "root",
//   password: "123456",
//   database: "minhnva",
// });

module.exports = { connection };
