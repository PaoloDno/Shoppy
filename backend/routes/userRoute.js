const express = require("express");
const router = express.Router();
const userAuth = require("../controller/userAuth.js");

router.post("/login", userAuth.loginUser);
router.post("/signup", userAuth.createUser);

module.exports = router;