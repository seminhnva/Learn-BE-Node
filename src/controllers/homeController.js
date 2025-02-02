const { connection } = require("../config/databases");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};
const getTest = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  // connection.query(
  //   `INSERT INTO
  //   Users (email, name, city)
  //    VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (err, result) {
  //     console.log(result);
  //     res.send("Create user successfully");
  //   }
  // );
  const [result, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city]
  );
  console.log("result", result);
  res.send("Create user successfully");
};

const getCreateUser = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomepage,
  getTest,
  postCreateUser,
  getCreateUser,
};
