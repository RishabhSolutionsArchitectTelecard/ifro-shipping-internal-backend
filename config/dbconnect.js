const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.TESTDB);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
