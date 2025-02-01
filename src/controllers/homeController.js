const getHomepage = (req, res) => {
  res.send("Hello mon World!");
};
const getTest = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getTest,
};
