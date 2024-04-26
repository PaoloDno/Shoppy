const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password_hash: {
    type: String,
    required: true
  },
  userRole: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  userImage: {
    type: String,
    default: "user.png",
  },
  verified: {
    type: Boolean, // Changed type to Boolean for verified field
    default: false,
  },
  secretKey: {
    type: String,
    default: null,
  },
  history: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model('User', UserSchema); // Create the User model

module.exports = User; // Export the User model
