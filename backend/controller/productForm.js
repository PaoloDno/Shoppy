const Product = require('../models/product.js')

const createProd = async (req, res) => {
  try {
    const { name, quantity, price, feature_img, other_imgs, category} = req.body;

    // Hash the password
  
    const newProduct = new Product({
      name,
      quantity, 
      price, 
      feature_img, 
      other_imgs, 
      category 
    });

    await newProduct.save();

    res.status(200).json({ success: true, message: name + " Product Successfully Added.", newProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getProd = async (req, res) => {
  try {
    const products = await Product.find()
    if (!products) {
      return  res.status(404).json({success:false})
    }

    res.status(200).json({products})
} catch (error) {
    console.log(error)
    res.status(500).json({success:false})
  }
};

async function getAllCategories(req, res) {
  try {
      // Query all unique categories from products
      const categories = await Product.distinct('category');

      // Send the categories as response
      res.json(categories);
  } catch (error) {
      console.error("Error while getting categories:", error);
      res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
  createProd,
  getProd,
  getAllCategories
};