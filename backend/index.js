const express = require('express');
const Product = require('./models/product.js')
const userModel = require('./models/user.js')
const connDB = require("./mongo.js");
const dotenv = require('dotenv');
const cors = require('cors')



dotenv.config();
const app = express()
// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

connDB()

//routers

const userRoute = require('./routes/userRoute.js');



app.use("/api", userRoute);

app.get("/", function(req, res){
  res.send("I love hags")
})


app.get("/api/products", async function(req, res) {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})
app.get("/api/users", async function(req, res) {
  try {
    const users = await userModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

app.listen(process.env.PORT || 3000, ()=>{
  console.log("server is running");
})