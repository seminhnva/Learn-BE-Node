const express = require("express");
const { getHomepage, getTest, postCreateUser } = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);

router.get("/test", getTest);

router.post("/create-user", postCreateUser);

module.exports = router;
