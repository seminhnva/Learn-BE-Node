const express = require("express");
const {getHomepage, getTest} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);

router.get("/test", getTest);

module.exports = router;