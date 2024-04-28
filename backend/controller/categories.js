const Product = require("../models/product");
const Category = require("../models/categories")


// Controller function to extract categories from products and save them to category schema
async function saveCategoriesFromProducts(req, res) {
  try {
      // Query all unique categories from products
      const categories = await Product.distinct('category');

      // Save each category to category schema
      await Promise.all(categories.map(async (category) => {
          // Check if the category already exists
          const existingCategory = await Category.findOne({ cName: category });

          if (!existingCategory) {
              // If the category doesn't exist, create a new one
              await Category.create({ cName: category });
          }
      }));

      res.json({ message: 'Categories saved successfully' });
  } catch (error) {
      console.error("Error while saving categories:", error);
      res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { saveCategoriesFromProducts };