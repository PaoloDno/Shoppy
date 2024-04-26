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
  password: {
    type: String,
    required: true
  },
  userRole: {
    type: Number,
    default: 0,
  },
  phoneNumber: {
    type: String,
    default: ""
  },
  userImage: {
    type: String,
    default: "",
  },
  verified: {
    type: Boolean, // Changed type to Boolean for verified field
    default: false,
  },
  history: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model('User', UserSchema); // Create the User model

module.exports = User; // Export the User model
