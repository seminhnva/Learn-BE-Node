const {connection} = require("../config/databases");

const getHomepage = (req, res) => {

  return res.render("home.ejs");  
};
const getTest = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req,res)=>{
  console.log(req.body);
  res.send('Create user success')

}

module.exports = {
  getHomepage,
  getTest,
  postCreateUser
};
