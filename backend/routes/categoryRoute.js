const express = require("express");
const router = express.Router();
const category = require('../controller/categories');
const Product = require('../controller/productForm');

router.post('/a', category.saveCategoriesFromProducts);

module.exports = router;