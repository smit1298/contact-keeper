const mongoose =require ('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFinfAndModify: false
    }).then({} => console.log('MongoDB Connected'))
} 