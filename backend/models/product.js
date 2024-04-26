const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Assuming you have a User model
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter a Product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    feature_img: {
      type: String,
      default: "",
      required: false
    },
    other_imgs: {
      type: Array,
      default: [],
      required: false
    },
    category: {
      type: String,
      required: true
    },
    reviews: [ReviewSchema] // Embedding reviews in the product schema
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);


module.exports = Product;