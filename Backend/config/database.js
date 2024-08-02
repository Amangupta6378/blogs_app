const mongoose = require('mongoose');

const connectWithDb = async () => {
  try {
    const uri = 'mongodb://localhost:27017/blogDatabase'; // Example MongoDB URI
    await mongoose.connect(uri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Rethrow the error to handle it elsewhere
  }
};

module.exports = connectWithDb;
