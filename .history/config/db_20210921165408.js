const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {

    try {
        
    } catch (error) {
        
    }
    mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('MongoDB Connected'))
    .catch(err => {
        console.err(err.message);
        process.exit(1)
    })
}

module.exports = connectDB