const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
name: {
    type: String,
    required: true
},

email: {
    type: String,
    required: true,
    unique: true
},

pass: {
    type: String,
    required: true
},

name: {
    type: String,
    required: true
},

})
