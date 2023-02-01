const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        required: false
    },
    lastname:{
        type: String,
        required: false
    }

}, {collection:"users"});

module.exports = mongoose.model("User", userSchema);