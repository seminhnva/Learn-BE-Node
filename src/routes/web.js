const express = require("express");
const { getHomepage, getTest, postCreateUser, getCreateUser } = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);
router.get("/home", getHomepage);

router.get("/test", getTest);

router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);

module.exports = router;
