const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    logUsername: {
        type: String,
        required: true,
        trim: true
    },
    logPassword: {
        type: String,
        required: true
    },
}, { timestamps: true });

var Login = mongoose.model('Login', LoginSchema);
module.exports = Login;