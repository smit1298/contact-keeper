const mongoose = require('mongoose');

const UserSchema  = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:
    },
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
    
})