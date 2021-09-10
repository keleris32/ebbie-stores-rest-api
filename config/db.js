require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected ah successfully');
  } catch (error) {
    console.error(error, 'MongoDB conection fail');
    process.exit(1);
  }
};

module.exports = connectDB;
