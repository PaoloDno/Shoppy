const express = require("express");
const router = express.Router();
const category = require("../controller/categories");

router.post("/", category.saveCategoriesFromProducts);

module.exports = router;