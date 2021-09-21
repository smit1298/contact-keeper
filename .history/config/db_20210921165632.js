const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {

    try {
      await mongoose
      .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    console.log('MongoDB Connected');
    } catch (error) {
         console.err(err.message);
        process.exit(1)  
    }

module.exports = connectDB;