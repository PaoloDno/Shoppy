const express = require("express");
const router = express.Router();
const category = require('../controller/categories');

router.post('/a', category.saveCategoriesFromProducts);
router.get("/categories", category.getCategories);

module.exports = router;