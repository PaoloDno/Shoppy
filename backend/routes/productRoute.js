const express = require("express");
const router = express.Router();
const prodForm = require("../controller/productForm.js");

router.post("/prodForm", prodForm.createProd);
router.get("/getProd", prodForm.getProd);
router.get("/getallcategories", prodForm.getAllCategories);


module.exports = router;
