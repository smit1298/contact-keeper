const mongoose =require ('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFinfAndModify: false
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
        console.error(err.message);
        process.exit(1);
    });
};
module.exports = connectDB;  