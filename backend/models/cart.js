// Cart Schema
const CartSchema = new mongoose.Schema({
  user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  created_at: {
      type: Date,
      default: Date.now
  },
  updated_at: {
      type: Date,
      default: Date.now
  }
});

const Cart = mongoose.model('Cart', CartSchema);

// Cart Item Schema
const CartItemSchema = new mongoose.Schema({
  cart_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cart',
      required: true
  },
  product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
  },
  quantity: {
      type: Number,
      required: true
  }
});

const CartItem = mongoose.model('CartItem', CartItemSchema);

module.exports = {
  Cart,
  CartItem
};
