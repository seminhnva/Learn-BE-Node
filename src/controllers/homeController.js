const {connection} = require("../config/databases");

const getHomepage = (req, res) => {
  connection.query("SELECT * FROM Users", function (err, results, fields) {
    res.send(JSON.stringify(results));
  });
  // res.send("Hello mon World!");
};
const getTest = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getTest,
};
