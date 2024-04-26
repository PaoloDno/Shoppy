const bcrypt = require('bcrypt');
const userModel = require('../models/user.js');



const createUser = async (req, res) => {
  try {
    const { username, email, password, userRole, phoneNumber, userImage, verified, secretKey, history, shipping_address, billing_address } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      username, 
      email, 
      password: hashedPassword, // Save hashed password to the database
      userRole, 
      phoneNumber, 
      userImage, 
      verified, 
      secretKey, 
      history, 
      shipping_address, 
      billing_address
    });

    await newUser.save();

    res.status(200).json({ success: true, message: "User Created Successfully.", newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Compare passwords
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { createUser, loginUser };
