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
    console.log();
    } catch (error) {
         console.err(err.message);
        process.exit(1)  
    }
.then(() => console.log('MongoDB Connected'))
    .catch(err => {
     
    })
}

module.exports = connectDB