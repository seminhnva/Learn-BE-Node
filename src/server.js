require("dotenv").config();
const express = require("express");
const path = require("path");
const confgigViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const {connection} = require("./config/databases");

const port = process.env.PORT || 8888;
const hostname = process.env.HOST;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

confgigViewEngine(app);
app.use("/", webRouter);

//simple query
// connection.query("SELECT * FROM Users", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
