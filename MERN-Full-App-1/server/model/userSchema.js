const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    phone: {
        type: Number,
        require
    },
    work: {
        type: String,
        require
    },
    password: {
        type: String,
        require
    },
    cPassword: {
        type: String,
        require
    }
});

//Creating models means creating Collections in mongodb

const User = mongoose.model('USER',userSchema);

module.exports = User;