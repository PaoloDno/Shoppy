const mongoose = require('mongoose')
require('dotenv').config();


const connDB = async () => {
  const dbUrl = 'mongodb+srv://' + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@backenddb.qcivss6.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority&appName=BackendDB";

  try {
    await mongoose.connect(dbUrl);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

module.exports = connDB;
