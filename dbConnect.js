const mongoose = require('mongoose');
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const dbConnection = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(console.log("MongoDB connected!"))
}

 module.exports = {dbConnection}