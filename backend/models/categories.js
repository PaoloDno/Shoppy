const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    cName: {
        type: String,
        required: true
    },
    cDescription: {
        type: String,
        required: false
    },
    cImage: {
        type: String
    }
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
