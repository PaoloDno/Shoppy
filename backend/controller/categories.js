const Category = require("../models/categories");
const Product = require("../models/product");


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
            } else {
                // If the category exists, you may choose to handle it differently
                console.log(`Category '${category}' already exists`);
            }
        }));

        res.json({ message: 'Categories saved successfully' });
    } catch (error) {
        console.error("Error while saving categories:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        if (!categories) {
            return  res.status(404).json({success:false})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false})
      }
}


module.exports = { saveCategoriesFromProducts, getCategories };